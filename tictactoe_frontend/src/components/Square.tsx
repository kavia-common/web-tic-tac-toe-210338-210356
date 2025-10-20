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

/**
 * Renders a themed chess icon for the given marker value.
 * - X -> Knight (♞)
 * - O -> Queen (♛)
 * Uses Unicode symbols to avoid external dependencies and maintains accessibility.
 */
function renderMarkerIcon(value: "X" | "O" | null): { icon: string; className: string; aria: string } {
  if (value === "X") {
    return {
      icon: "♞",
      className: "text-[var(--ocean-primary)]",
      aria: "Knight",
    };
  }
  if (value === "O") {
    return {
      icon: "♛",
      className: "text-[var(--ocean-secondary)]",
      aria: "Queen",
    };
  }
  return {
    icon: "",
    className: "text-[var(--ocean-text)]",
    aria: "empty",
  };
}

export default function Square({ value, onClick, disabled, highlight, index }: Props) {
  const { icon, className, aria } = renderMarkerIcon(value);
  const label = `Square ${index + 1}: ${aria}${value ? " move" : ""}`;

  return (
    <button
      type="button"
      className={`ocean-square w-full aspect-square rounded-xl flex items-center justify-center select-none ${
        highlight ? "win-square" : ""
      }`}
      aria-label={label}
      aria-pressed={!!value}
      onClick={onClick}
      disabled={disabled}
      data-index={index}
    >
      {/* Keep icon sizing consistent across fonts and devices */}
      <span
        className={`${className} icon-cell`}
        aria-hidden={value ? "false" : "true"}
        role={value ? "img" : undefined}
      >
        {icon}
      </span>
    </button>
  );
}
