/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
const zeroMatrix = (matrix) => {
  if (matrix.length === 0) {
    return matrix;
  }

  const rowsCount = matrix.length;
  const columnsCount = matrix[0].length;

  const rows = new Array(matrix.length);
  const columns = new Array(matrix[0].length);

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (rows[i] || columns[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const a = [
  [1, 2, 3, 4, 0],
  [6, 0, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 0, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const b = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [11, 0, 13, 14, 0],
  [0, 0, 0, 0, 0],
  [21, 0, 23, 24, 0],
];
console.log(
  zeroMatrix([
    [1, 0],
    [0, 3],
  ])
);

console.log(JSON.stringify(zeroMatrix(a)) === JSON.stringify(b));
