import { NextResponse } from "next/server";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;
const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

export async function POST(req: Request) {
  if (!databaseUrl || !PAYSTACK_SECRET) {
    return NextResponse.json({ success: false, message: "Server not configured." }, { status: 500 });
  }

  const { reference, subscriberId } = (await req.json()) as { reference?: string; subscriberId?: string };
  if (!reference || !subscriberId) {
    return NextResponse.json({ success: false, message: "Missing reference or subscriberId." }, { status: 400 });
  }

  const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
  });
  const body = await res.json();

  if (body.status && body.data?.status === "success") {
    const sql = postgres(databaseUrl, { max: 1 });
    await sql`UPDATE subscribers SET status = 'active', updated_at = now() WHERE id = ${subscriberId}`;
    await sql.end();
    return NextResponse.json({ success: true, message: "Payment verified. Subscription activated." });
  }

  return NextResponse.json({ success: false, message: "Payment not verified." }, { status: 402 });
}
