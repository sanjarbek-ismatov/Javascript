const proxy = new Proxy({}, {
    get(target, p, receiver) {
        if(p in target) {
           const prop = target[p]
            if(typeof prop === 'function') return prop.bind(target)
            return prop
        }
        else return "Mavjud emas"
    },
    set(target, p, newValue, receiver) {
        if(typeof newValue === "function") target[p] = newValue
        else target[`my${p[0].toUpperCase()}${p.slice(1)}`] =  newValue
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.includes("_"))
    },
    getOwnPropertyDescriptor(target, p) {
        return {
            enumerable: true,
            configurable: true,
            writable: p !== "myName",
            value: target[p]
        }
    },
    has(target, p) {
        if(p.includes("girlfriend")) return false
        return p in target
    },
    deleteProperty(target, p) {
        if(p.includes("girlfriend")) return "Access denied"
        else delete target[p]
    },
})
proxy.name = "Sanjarbek"
proxy.last = "Ismatov"
proxy._girlfriend = "Sarvinoz"
proxy.sayHi = function(){
    console.log(`Hello ${this.myName}`)
}
// console.log(Object.getOwnPropertyDescriptors(proxy))
console.log(Object.keys(proxy))
delete proxy.my_girlfriend
console.log("my_girlfriend" in proxy)
console.log(proxy.my_girlfriend)
proxy.sayHi()


let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end;
    }
});

console.log(5 in range); // true
console.log(50 in range); // false

function delay(func, ms){
    return new Proxy(func, {
        apply(target, thisArg, argArray) {
            setTimeout(() => target.apply(thisArg, argArray), ms)
        }
    })
}
const sayHi = delay((name) => console.log(`Hello ${name}`), 1000)
sayHi("Sanjarbek")

class Human{
    constructor(props) {
        this.props = props
    }
}
const Human2 = new Proxy(Human, {
    construct(target, argArray, newTarget) {
        console.log("I'm running")
        return new target(...argArray)
    }
})
console.log(new Human2({name: "Sanjarbek"}).props.name)