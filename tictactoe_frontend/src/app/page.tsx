"use client";

import React, { useEffect, useMemo, useState } from "react";
import Board from "@/components/Board";
import StatusBar from "@/components/StatusBar";
import Controls from "@/components/Controls";
import { calculateWinner, isDraw, type Player, type SquareValue } from "@/lib/game";
import { logAudit } from "@/lib/audit";

// ============================================================================
// REQUIREMENT TRACEABILITY
// ============================================================================
// Requirement ID: REQ-TTT-UI-001
// User Story: As a user, I want to play TicTacToe with a responsive UI.
// Acceptance Criteria:
// - 3x3 board centered, status above, controls below
// - Ocean Professional theme, winner/draw detection, highlight line
// - Input validation, audit-style logs
// GxP Impact: NO (client demo)
// Risk Level: LOW
// Validation Protocol: VP-TTT-UI
// ============================================================================

export default function Home() {
  const [squares, setSquares] = useState<SquareValue[]>(
    Array<SquareValue>(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winnerResult = useMemo(() => calculateWinner(squares), [squares]);
  const winner = winnerResult?.winner ?? null;
  const winningLine = winnerResult?.line ?? null;
  const draw = useMemo(() => isDraw(squares), [squares]);
  const nextPlayer: Player = xIsNext ? "X" : "O";
  const gameOver = !!winner || draw;

  const handleSquareClick = (index: number) => {
    // Validation: ignore if game over or square occupied
    if (gameOver) {
      logAudit("INVALID_ACTION", { reason: "Game already concluded", index });
      return;
    }
    if (squares[index] !== null) {
      logAudit("INVALID_ACTION", { reason: "Square occupied", index });
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = nextPlayer;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    logAudit("MOVE", { index, player: nextPlayer, board: newSquares });
  };

  const handleReset = () => {
    setSquares(Array<SquareValue>(9).fill(null));
    // Keep the same next player to simulate "reset current game"
    logAudit("RESET", { nextPlayer: nextPlayer });
  };

  const handleNewGame = () => {
    setSquares(Array<SquareValue>(9).fill(null));
    setXIsNext(true); // X always starts new game
    logAudit("NEW_GAME", { startingPlayer: "X" });
  };

  // Minimal audit note regarding UI marker change (X->Knight, O->Queen)
  useEffect(() => {
    logAudit("UI_NOTE", { note: "UI markers updated to chess icons: X->Knight, O->Queen" });
    // one-time notice on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container-center">
      <section className="card ocean-surface">
        <header className="mb-4 sm:mb-6 text-center">
          <h1 className="title mb-1">TicTacToe</h1>
          <p className="subtitle">Ocean Professional • Modern UI</p>
        </header>

        <div className="section mb-4 sm:mb-6">
          <StatusBar winner={winner} next={nextPlayer} isDraw={draw} />
        </div>

        <div className="mb-4 sm:mb-6">
          <Board
            squares={squares}
            onSquareClick={handleSquareClick}
            disabled={gameOver}
            winningLine={winningLine}
          />
        </div>

        <footer className="section">
          <Controls onReset={handleReset} onNewGame={handleNewGame} disabled={false} />
        </footer>
      </section>
    </main>
  );
}
