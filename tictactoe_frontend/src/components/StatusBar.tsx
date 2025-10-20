"use client";

import React from "react";
import type { Player } from "@/lib/game";

type Props = {
  winner: Player | null;
  next: Player;
  isDraw: boolean;
};

function playerName(p: Player): "Knight" | "Queen" {
  return p === "X" ? "Knight" : "Queen";
}

export default function StatusBar({ winner, next, isDraw }: Props) {
  const text = winner
    ? `Winner: ${playerName(winner)}`
    : isDraw
    ? "Draw: No more moves"
    : `Next player: ${playerName(next)}`;
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
      aria-label={
        winner
          ? `Game status: Winner is ${playerName(winner)}`
          : isDraw
          ? "Game status: Draw"
          : `Game status: Next player is ${playerName(next)}`
      }
    >
      <div className={statusClass}>{text}</div>
    </div>
  );
}
