function uniquePaths(rows, cols) {
  if (rows === 1 || cols === 1) {
    return 1;
  }

  return uniquePaths(rows - 1, cols) + uniquePaths(rows, cols - 1);
}


console.log(uniquePaths(2, 3));
