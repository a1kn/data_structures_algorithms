function uniquePaths(rows, cols, memo = {}) {
  if (rows === 1 || cols === 1) {
    return 1;
  }

  if (!memo[rows, cols]) {
    memo[rows, cols] = uniquePaths(rows - 1, cols, memo) 
      + uniquePaths(rows, cols - 1, memo);
  }

  return memo[rows, cols];
}

console.log(uniquePaths(8, 3));
