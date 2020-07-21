function reverse(string) {
  if (string.length === 1) {
    return string;
  }

  return string.slice(-1) + reverse(string.slice(0, -1));
}

console.log(reverse('arthur'));
