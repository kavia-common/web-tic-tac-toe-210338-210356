"use client";

import React from "react";
import type { Player } from "@/lib/game";

type Props = {
  winner: Player | null;
  next: Player;
  isDraw: boolean;
};

export default function StatusBar({ winner, next, isDraw }: Props) {
  const text = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw: No more moves"
    : `Next player: ${next}`;
  const statusClass = winner
    ? "status-badge status-win"
    : isDraw
    ? "status-badge status-draw"
    : "status-badge status-next";

  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className={statusClass}>{text}</div>
    </div>
  );
}
