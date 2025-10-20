"use client";

import React from "react";

type Props = {
  onReset: () => void;
  onNewGame: () => void;
  disabled?: boolean;
};

export default function Controls({ onReset, onNewGame, disabled }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <button
        type="button"
        className="ocean-btn ocean-btn-outline"
        onClick={onReset}
        disabled={disabled}
        aria-label="Reset current game state"
      >
        Reset
      </button>
      <button
        type="button"
        className="ocean-btn ocean-btn-primary"
        onClick={onNewGame}
        aria-label="Start a new game with Knight as next player"
      >
        New Game
      </button>
    </div>
  );
}
