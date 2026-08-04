"use client";
import Link from "next/link";
import { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  img: string;
  index: number;
  type?: "worker" | "intern";
}

export default function TeamMemberCard({ name, role, bio, img, index, type = "worker" }: TeamMemberCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link
      href={`/about/team?person=${encodeURIComponent(name)}`}
      className="block p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/30 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
        {!imgFailed ? (
          <img
            src={`/assets/team/${img}`}
            alt={name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : null}
        <div
          className={`${!imgFailed ? "hidden" : "flex"} absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400 text-xs font-mono tracking-widest`}
        >
          PHOTO PLACEHOLDER
        </div>
      </div>
      <div className="pt-1">
        <h3 className="text-[15px] font-bold text-zinc-900 tracking-tight">{name}</h3>
        <p className="text-xs text-red-700 font-mono font-bold tracking-wider mt-0.5 uppercase">{role}</p>
        {bio && (
          <p className="text-zinc-500 text-[11px] leading-relaxed line-clamp-3 mt-2 font-medium">{bio}</p>
        )}
      </div>
    </Link>
  );
}
