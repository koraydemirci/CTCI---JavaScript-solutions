/**
CTCI - 1.7
Rotate Matrix: 
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
write a method to rotate the image by 90 degrees. Can you do this in place? 
I: nxn matrix
O: rotated matrix - 90 deg, clockwise
C: rotate matrix in place, optimize
E: empty matrix, even and odd values for n
time complexity: O(n^2) - quadratic
space complexity: O(2) - constant
*/

let rotateMatrix = (m) => {
  let n = m.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = m[i][j];
      m[i][j] = m[i][n - 1 - j];
      m[i][n - 1 - j] = temp;
    }
  }

  return m;
};

let compareMatrix = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return a === b;
  } else {
    let out = true;
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (out) {
        out = compareMatrix(a[i], b[i]);
      } else {
        return false;
      }
    }
    return out;
  }
};

console.log(
  compareMatrix(
    rotateMatrix([
      [1, 2],
      [3, 4],
    ]),
    [
      [3, 1],
      [4, 2],
    ]
  ),
  compareMatrix(
    rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]
  ),
  compareMatrix(
    rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]),
    [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]
  ),
  compareMatrix(
    rotateMatrix([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ]),
    [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ]
  ),
  compareMatrix(rotateMatrix([]), []),
  compareMatrix(rotateMatrix([[]]), [[]]),
  compareMatrix(rotateMatrix([[1]]), [[1]])
);
