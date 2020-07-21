function findIdxOfX(str, idx = 0) {
  if (idx === str.length) {
    return -1;
  }

  if (str[idx] === 'x') {
    return idx;
  } else {
    return findIdxOfX(str, idx + 1);
  }
}

console.log(findIdxOfX('asdkfjlkjlksdfjlkdsjklbx'));
