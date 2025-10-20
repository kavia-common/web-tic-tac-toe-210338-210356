"use client";

import React from "react";
import Square from "./Square";
import type { SquareValue } from "@/lib/game";

type Props = {
  squares: SquareValue[];
  onSquareClick: (index: number) => void;
  disabled?: boolean;
  winningLine?: number[] | null;
};

export default function Board({ squares, onSquareClick, disabled, winningLine }: Props) {
  return (
    <div className="ocean-board">
      <div
        className="grid grid-cols-3 gap-2 sm:gap-3"
        role="grid"
        aria-label="TicTacToe board"
      >
        {squares.map((val, i) => {
          const highlight = winningLine?.includes(i) ?? false;
          return (
            <div role="gridcell" key={i} aria-selected={!!val}>
              <Square
                value={val}
                onClick={() => onSquareClick(i)}
                disabled={disabled || !!val}
                highlight={highlight}
                index={i}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
