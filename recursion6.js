function doubleArrayMutate(arr, idx = 0) {
  if (idx === arr.length) {
    return;
  }

  arr[idx] *= 2;
  doubleArrayMutate(arr, idx + 1);
}

const array = [1, 2, 3];

doubleArrayMutate(array);

console.log(array);
