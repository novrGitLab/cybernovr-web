"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FlashCard {
  tag: "Blog" | "News" | "Webinar";
  title: string;
  date: string;
  path: string;
}

export default function FlashCardRotator({ cards }: { cards: FlashCard[] }) {
  const [flashCardIndex, setFlashCardIndex] = useState(0);

  useEffect(() => {
    const flashTimer = setInterval(() => {
      setFlashCardIndex((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(flashTimer);
  }, [cards.length]);

  if (cards.length === 0) return null;

  const card = cards[flashCardIndex];

  return (
    <Link href={card.path} className="w-full bg-white border border-zinc-200 hover:border-red-500/40 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group block">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1.5 flex-1 min-w-0">
          <span className={`inline-block font-mono text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded border ${
            card.tag === "Blog" ? "bg-purple-950/[0.05] border-purple-900/20 text-purple-700" :
            card.tag === "News" ? "bg-red-600/10 border-red-500/20 text-red-600" :
            "bg-amber-500/10 border-amber-500/20 text-amber-700"
          }`}>
            {card.tag}
          </span>
          <p className="text-[13px] font-bold text-zinc-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
            {card.title}
          </p>
          <p className="font-mono text-[11px] text-zinc-500 font-bold tracking-wider uppercase">
            {card.date}
          </p>
        </div>
        <ArrowRight className="h-4 w-4 text-zinc-300 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
      </div>
      <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-zinc-100">
        {cards.map((_, i) => (
          <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === flashCardIndex ? "w-6 bg-red-600" : "w-2 bg-zinc-200"}`} />
        ))}
        <span className="ml-auto font-mono text-[10px] text-zinc-400 tracking-widest uppercase font-bold">Latest Updates</span>
      </div>
    </Link>
  );
}
