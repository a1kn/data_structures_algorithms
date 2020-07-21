function countChars(arrOfStrings) {
  if (arrOfStrings.length === 1) {
    return arrOfStrings[0].length;
  }

  return arrOfStrings[0].length + countChars(arrOfStrings.slice(1)); 
}

console.log(countChars(['ab', 'c', 'def', 'ghij']));
