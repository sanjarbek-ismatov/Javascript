function stringToNumber(string) {
  let temp = string;
  const numbers = [
    {
      number: 0,
      string: "zero",
    },
    {
      number: 1,
      string: "one",
    },
    {
      number: 2,
      string: "two",
    },
    {
      number: 3,
      string: "three",
    },
    {
      number: 4,
      string: "four",
    },
    {
      number: 5,
      string: "five",
    },
    {
      number: 6,
      string: "six",
    },
    {
      number: 7,
      string: "seven",
    },
    {
      number: 8,
      string: "eight",
    },
    {
      number: 9,
      string: "nine",
    },
  ];
  for (const num of numbers) {
    const regex = new RegExp(`(${num.string.toLowerCase()}?)`, "gi");
    temp = temp.replace(regex, () => num.number).replace(/\s/g, "");
  }
  return +temp;
}
String.prototype.valueOf = function () {
  return stringToNumber(String(this));
};
const one = new String("two zero zero zero");
console.log(one + 24);
