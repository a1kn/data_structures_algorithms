function evenNumGen(arr) {
  if (arr.length === 2) {
    return arr[0] % 2 === 0 ? [arr[0]] : [];
  }

  if (arr[0] % 2 === 0) {
    return [arr[0]].concat(evenNumGen(arr.slice(1)));
  } else {
    return evenNumGen(arr.slice(1));
  }
}

console.log(evenNumGen([1, 2, 3, 4, 5]));
