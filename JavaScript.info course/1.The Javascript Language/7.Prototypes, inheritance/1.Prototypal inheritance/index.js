let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};

const tiger = {
    name: "tiger",
    // __proto__: animal
}
Object.setPrototypeOf(tiger, animal)
// console.log(Object.getPrototypeOf(tiger)) // __proto__
// console.log(tiger.__proto__) // the same as getProtoTypeOf
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true
// console.log(rabbit);

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// console.log(longEar.__proto__);


let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    _age: 17,
    get age() { return this._age},
    set age(v){
        this._age = v
    },
    isMarried() {
        return this._age >= 18
    },

};

let admin = {
    __proto__: user,
    isAdmin: true
};
// console.log(user.fullName) // John Smith
admin.fullName = "Sanjarbek Ismatov"
// console.log(admin.age, admin.isMarried())
// admin.age = 18
// console.log(admin.age, admin.isMarried())
// console.log(user.age, user.isMarried())
// console.log(admin)

// console.log(Object.keys(admin))
Object.defineProperty(Object.prototype, "some", {
    value: null,
    enumerable: true
})
// console.log(admin.some) // null

// for(let key in admin){
//     console.log(key) // prints all properties, first own it, then inheritance
// }

// for(let key in admin){
//     if(admin.hasOwnProperty(key))
//     console.log(key) // prints just it own properties
// }

let hamster = {
    stomach: [],

    eat(food) {
        // assign to this.stomach instead of this.stomach.push
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// Lazy one's stomach is empty
console.log( lazy.stomach ); // <nothing> // not referenced