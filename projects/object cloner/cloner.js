const key = "use";
const user = {
  name: "Sanjarbek",
  age: 18,
  sex: "male",
  isAdult() {
    return this.age >= 18;
  },
  [key + "Detail"]: "nothing",
  girlfriend: {
    name: "Sarvinoz",
    age: 18,
  },
};

/**
 * Object cloner
 * @param {{}} o actual object
 * @returns {{}} cloned object
 */
function objectCloner(o) {
  if (typeof o !== "object" && o !== null) {
    return o;
  } else {
    const cloned = Array.isArray(o) ? [] : {};
    for (let key in o) {
      cloned[key] = objectCloner(o[key]);
    }
    return cloned;
  }
}

const copyUser = objectCloner(user);

console.log(user);
console.log(copyUser.girlfriend === user.girlfriend);
