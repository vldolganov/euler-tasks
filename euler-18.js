//O(n^2)

function maxSum() {
    const triangle = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
}

console.time('TIME');
console.log(maxSum());
console.timeEnd('TIME'); 
