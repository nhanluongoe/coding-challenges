export default function zeroStriping(matrix: number[][]): void {
  const rowSets = new Set();
  const columnSets = new Set();

  // first pass: identify row and column where it contains zeo
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        columnSets.add(i);
        rowSets.add(j);
      }
    }
  }

  // second pass: replace all element with zero where it index belongs to
  // those rows and columns above in the first pass
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (columnSets.has(i) || rowSets.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
