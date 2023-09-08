const user = {
    _name: "Sanjarbek",
    get name(){
        return this._name
    }
}
const userProxy = new Proxy(user, {
    get(target, p, receiver) {
        return Reflect.get(...arguments)
        // return Reflect.get(target, p, receiver)
    }
})
const admin = {
    __proto__: userProxy,
    _name: "Admin"
}
console.log(admin.name)


const map = new Map()

const mapProxy = new Proxy(map, {
    get(target, p, receiver) {
        console.log("I'm working")
        const value = Reflect.get(...arguments)
        return typeof value === "function" ? value.bind(target) : value
    }
})
mapProxy.set("name", "Sanjarbek")
console.log(mapProxy.get("name"))
const weakMap = new WeakMap()
const {proxy, revoke} = Proxy.revocable(user, {})
// revoke()
// proxy.name = "Sanjarbek"
weakMap.set(proxy, revoke)
// weakMap.get(proxy)()
console.log(proxy.name)