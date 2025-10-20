import { calculateWinner, isDraw, type SquareValue } from "@/lib/game";

describe("Game Logic Helpers", () => {
  test("no winner on empty board", () => {
    const board: SquareValue[] = Array(9).fill(null);
    expect(calculateWinner(board)).toBeNull();
    expect(isDraw(board)).toBe(false);
  });

  test("detects row win", () => {
    const board: SquareValue[] = ["X", "X", "X", null, null, null, null, null, null];
    const res = calculateWinner(board);
    expect(res).not.toBeNull();
    expect(res?.winner).toBe("X");
    expect(res?.line).toEqual([0, 1, 2]);
  });

  test("detects column win", () => {
    const board: SquareValue[] = ["O", null, null, "O", null, null, "O", null, null];
    const res = calculateWinner(board);
    expect(res?.winner).toBe("O");
    expect(res?.line).toEqual([0, 3, 6]);
  });

  test("detects diagonal win", () => {
    const board: SquareValue[] = ["X", null, null, null, "X", null, null, null, "X"];
    const res = calculateWinner(board);
    expect(res?.winner).toBe("X");
    expect(res?.line).toEqual([0, 4, 8]);
  });

  test("detects draw when board full and no winner", () => {
    const board: SquareValue[] = [
      "X", "O", "X",
      "X", "O", "O",
      "O", "X", "X",
    ];
    expect(calculateWinner(board)).toBeNull();
    expect(isDraw(board)).toBe(true);
  });

  test("isDraw false if there is a winner even if board full", () => {
    const board: SquareValue[] = [
      "X", "X", "X",
      "O", "O", "X",
      "O", "X", "O",
    ];
    expect(isDraw(board)).toBe(false);
  });

  test("handles invalid board input gracefully", () => {
    // @ts-expect-error intentionally wrong param
    expect(calculateWinner(null)).toBeNull();
    // @ts-expect-error intentionally wrong param
    expect(isDraw({})).toBe(false);
    expect(calculateWinner([])).toBeNull();
    expect(isDraw([])).toBe(false);
  });
});
