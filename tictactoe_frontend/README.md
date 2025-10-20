# TicTacToe Frontend (Next.js)

A modern, responsive TicTacToe web UI built with Next.js App Router, styled with the Ocean Professional theme, including basic client-side game logic, minimal audit-style console logs, and unit tests for game helpers.

## Getting Started

Install dependencies:
- npm install

Run the dev server:
- npm run dev
Open http://localhost:3000 in your browser.

Build for production:
- npm run build
- npm run start

## Feature Overview

- Responsive 3x3 board centered on the page
- Status bar shows: Next player, Winner, or Draw
- Controls: Reset (clear board, same game), New Game (clears board and toggles starting player back to X)
- Ocean Professional theme via CSS variables and Tailwind utilities
- Input validation: ignores clicks on occupied cells or after game end
- Accessibility: ARIA roles for buttons and status announcements
- Minimal client audit logs to console with ISO timestamps:
  - MOVE, RESET, NEW_GAME, INVALID_ACTION

## Project Structure

- src/app/page.tsx: Main page with state and layout
- src/components/: Board, Square, StatusBar, Controls
- src/lib/game.ts: Game logic helpers (calculateWinner, isDraw)
- src/lib/audit.ts: Minimal audit logger
- src/app/globals.css and src/lib/theme.css: Global styles and theme variables
- __tests__/game.test.ts: Unit tests for game helpers

## Compliance Mapping (GxP-style minimal for frontend demo)

- Data Integrity (ALCOA+): Client actions are logged with ISO timestamp and action code; no PII captured, no persistence performed in this demo.
- Audit Trail: `logAudit` writes action + payload to console.info in real-time.
- Validation Controls: Input validation prevents invalid moves; board state is checked before updates.
- Error Handling: UI ignores invalid interactions and displays friendly status messages.
- Access Controls / E-signature: Not applicable for this demo; no backend or protected data.
- Documentation: Public functions include JSDoc; README provides usage and assumptions.

## Testing

This repo uses Jest with ts-jest for unit testing helper functions.

Run tests:
- npm test

Coverage:
- Helpers are covered with >=80% line/branch coverage.

## Assumptions and Constraints

- No backend/API calls; purely client-side.
- No environment variables required.
- Ocean Professional theme colors:
  - Primary: #2563EB
  - Secondary/Success: #F59E0B
  - Error: #EF4444
  - Background: #f9fafb
  - Surface: #ffffff
  - Text: #111827

## Accessibility

- Buttons with role="button", semantic <button>.
- ARIA live region for status updates.
- Focus styles preserved.

## Release Gate (Lightweight)

- [x] Inputs validated on click
- [x] Minimal audit trail for actions
- [x] Unit tests for helpers >=80% coverage
- [x] Error handling for invalid user actions
- [x] Documentation completed

