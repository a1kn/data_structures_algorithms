function displayCountdown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

function countdownRecursion(num) {
  console.log(num);

  if (num > 0) {
    countdownRecursion(num - 1);
  }
}

countdownRecursion(10);
