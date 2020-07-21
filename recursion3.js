function printEveryOther(low, high) {
  console.log(low);

  if (low < high) {
    printEveryOther(low + 2, high);
  }
}

printEveryOther(0, 10);
