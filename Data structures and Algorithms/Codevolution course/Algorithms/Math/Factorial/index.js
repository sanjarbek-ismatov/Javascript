function factorial(end) {
  console.log(end);
  return end < 1 ? 1 : end * factorial(end - 1);
}
factorial(5);
