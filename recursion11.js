function triangleNums(num) {
  if (num === 1) {
    return 1;
  }

  return num + triangleNums(num - 1);
}

console.log(triangleNums(7));
