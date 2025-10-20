"use client";

import React from "react";

// ============================================================================
// REQUIREMENT TRACEABILITY
// ============================================================================
// Requirement ID: REQ-TTT-003
// User Story: As a user, I need to click squares to place my mark.
// Acceptance Criteria: Disabled when occupied or after game end.
// GxP Impact: NO
// Risk Level: LOW
// Validation Protocol: VP-TTT-UI
// ============================================================================

type Props = {
  value: "X" | "O" | null;
  onClick: () => void;
  disabled?: boolean;
  highlight?: boolean;
  index: number;
};

export default function Square({ value, onClick, disabled, highlight, index }: Props) {
  const label = value ? `Square ${index + 1}: ${value}` : `Square ${index + 1}: empty`;
  return (
    <button
      type="button"
      className={`ocean-square w-full aspect-square text-3xl sm:text-4xl font-extrabold rounded-xl flex items-center justify-center select-none ${
        highlight ? "win-square" : ""
      }`}
      aria-label={label}
      aria-pressed={!!value}
      onClick={onClick}
      disabled={disabled}
      data-index={index}
    >
      <span
        className={`${
          value === "X"
            ? "text-[var(--ocean-primary)]"
            : value === "O"
            ? "text-[var(--ocean-secondary)]"
            : "text-[var(--ocean-text)]"
        } drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]`}
      >
        {value ?? ""}
      </span>
    </button>
  );
}
