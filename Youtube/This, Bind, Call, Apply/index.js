const arr = [1, 2, 3, 4, 5];
Array.prototype.plusTo = function (n) {
  return this.map((e) => e + n);
};

console.log(arr.plusTo(2));

const newArr = Array.prototype.map.call(arr, (e) => ++e);
console.log(newArr);

const him = {
  name: "Sanjarbek",
  age: 17,
  gender: "male",
  getInfo(...args) {
    console.log(args);
    return `Name is ${this.name}, age is ${this.age}`;
  },
};
const her = {
  name: "Sarvinoz",
  age: 17,
  gender: "female",
};
him.getInfo.bind(her, "sasasa");
him.getInfo.apply(her, ["sasas", "sddsdsds"]);
const hisInfo = him.getInfo("some");
const herInfo = him.getInfo.call(her, "nothing");
console.log(hisInfo, herInfo);
