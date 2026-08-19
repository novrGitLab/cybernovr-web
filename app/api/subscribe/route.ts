import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import postgres from "postgres";
import { TOPIC_KEYS, SECTOR_KEYS, LOCATION_KEYS, TIER_KEYS } from "@/app/novralert-options";

const databaseUrl = process.env.DATABASE_URL;

// The alert engine creates this table on its first run, but the signup site
// should be able to stand alone — CREATE IF NOT EXISTS is idempotent either way.
const TABLE_SQL = `
CREATE TABLE IF NOT EXISTS subscribers (
  id text PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id integer NOT NULL DEFAULT 1,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  company text,
  topics jsonb NOT NULL DEFAULT '[]'::jsonb,
  sectors jsonb NOT NULL DEFAULT '[]'::jsonb,
  locations jsonb NOT NULL DEFAULT '[]'::jsonb,
  cnii boolean NOT NULL DEFAULT false,
  tier text NOT NULL,
  status text NOT NULL,
  unsubscribe_token text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
)`;

// Lazy client: never constructed at import time, so builds have no DB side effects.
let client: ReturnType<typeof postgres> | null = null;
let ensureTable: Promise<void> | null = null;

function getDb() {
  if (!databaseUrl) return null;
  if (!client) {
    client = postgres(databaseUrl, { max: 1 });
    ensureTable = client
      .unsafe(TABLE_SQL)
      .then(() => undefined)
      .catch((err) => {
        client = null;
        ensureTable = null;
        throw err;
      });
  }
  return client;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function pickKeys(value: unknown, allowed: readonly string[]): string[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const keys = value.filter((v): v is string => typeof v === "string");
  if (keys.length !== value.length || !keys.every((k) => allowed.includes(k))) return null;
  return keys;
}

export async function POST(req: Request) {
  const sql = getDb();
  if (!sql || !ensureTable) {
    return NextResponse.json({ success: false, message: "Database is not configured." }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const b = (body ?? {}) as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  const company = typeof b.company === "string" && b.company.trim() ? b.company.trim() : null;
  const topics = pickKeys(b.topics, TOPIC_KEYS);
  const sectors = pickKeys(b.sectors, SECTOR_KEYS);
  const locations = pickKeys(b.locations, LOCATION_KEYS) ?? ["global"];
  const cnii = b.cnii === true;
  const tier = typeof b.tier === "string" && TIER_KEYS.includes(b.tier as (typeof TIER_KEYS)[number]) ? b.tier : null;

  const isFree = tier === "free";

  if (!name || !EMAIL_RE.test(email) || !topics || !sectors || !tier) {
    return NextResponse.json(
      { success: false, message: "Please provide a name, a valid email, at least one topic, a sector, and a tier." },
      { status: 400 }
    );
  }

  if (!isFree && !locations) {
    return NextResponse.json(
      { success: false, message: "Paid plans require at least one location." },
      { status: 400 }
    );
  }

  try {
    await ensureTable;
    // email is unique — re-signup with the same email UPDATES the row, not duplicates.
    const [row] = await sql`
      INSERT INTO subscribers (tenant_id, name, email, company, topics, sectors, locations, cnii, tier, status, unsubscribe_token)
      VALUES (1, ${name}, ${email}, ${company}, ${sql.json(topics)}, ${sql.json(sectors)}, ${sql.json(locations)}, ${cnii}, ${tier}, ${tier === "free" ? "active" : "pending_payment"}, ${randomUUID()})
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        company = EXCLUDED.company,
        topics = EXCLUDED.topics,
        sectors = EXCLUDED.sectors,
        locations = EXCLUDED.locations,
        cnii = EXCLUDED.cnii,
        tier = EXCLUDED.tier,
        status = EXCLUDED.status,
        unsubscribe_token = EXCLUDED.unsubscribe_token,
        updated_at = now()
      RETURNING id
    `;
    return NextResponse.json({ success: true, message: "Subscription saved.", subscriberId: row.id });
  } catch (err) {
    console.error("NovrALERT subscribe error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ success: false, message: "Subscription could not be saved. Please try again." }, { status: 500 });
  }
}
