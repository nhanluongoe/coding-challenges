export default function verifySudokuBoard(board: number[][]): boolean {
  const boardLength = board[0].length;
  const rowSets = Array.from({ length: boardLength }, () => new Set<number>());
  const columnSets = Array.from(
    { length: boardLength },
    () => new Set<number>(),
  );
  const squareSets = Array.from(
    { length: boardLength },
    () => new Set<number>(),
  );
  for (let i = 0; i < boardLength; i++) {
    for (let j = 0; j < boardLength; j++) {
      const currentNumber = board[i][j];
      if (currentNumber == 0) continue;

      if (columnSets[i].has(currentNumber)) return false;
      if (rowSets[j].has(currentNumber)) return false;

      const squareSetsIdx =
        3 * (Math.ceil((j + 1) / 3) - 1) + Math.ceil((i + 1) / 3) - 1;
      if (squareSets[squareSetsIdx].has(currentNumber)) return false;

      columnSets[i].add(currentNumber);
      rowSets[j].add(currentNumber);
      squareSets[squareSetsIdx].add(currentNumber);
    }
  }
  return true;
}
