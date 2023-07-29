const names = ['Sanjarbek', " + ",  "Sarvinoz", "Sardor", "Bro"]
const [me, , her, ...otherName] = names
console.log(me, her, otherName)
const love = {

};
[love.me, love.her] = [me, her]
console.log(love)
// const [one, two, three] = new Set([1, 2, 3])

// console.log(one) // 1

let [firstname, lastname] = []
// the same as let firstname, lastname

const [one = "bir", two, three, four = 4] = [1, 2, 3]
console.log(one, four)

// Destructing object

const object = {
    name: "Sanjarbek",
    other: "something"
}
const {name: hisName = "Bro", hisLove = "Sarvinoz", ...others} = object
console.log(hisLove, hisLove, others)

{
    console.log(true)
}

let name, other;

({name, other} = object)
console.log(name, other)


let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

const {size: {width, height}, items: [cake,donut], extra} = options
console.log(width, height, cake, donut, extra)

function showMenu({
                      title = "Untitled",
                      width: w = 100,  // width goes to w
                      height: h = 200, // height goes to h
                      items: [item1, item2] // items first element goes to item1, second to item2
                  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
}
// showMenu() // error
showMenu({}) // work