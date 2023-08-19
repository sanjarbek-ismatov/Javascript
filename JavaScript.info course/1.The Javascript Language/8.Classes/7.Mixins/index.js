/*
let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};
let sayHIMixin = {
    __proto__: sayMixin,
    sayHi(){
        super.say(`Hello ${this.name}`) // this has been changed
    }
}
class User{
    constructor(name) {
        this.name = name
    }
}
// User.prototype = sayHIMixin // doesn't work
Object.assign(User.prototype, sayHIMixin)
new User("Sanjarbek").sayHi()
 */

let eventMixins = {
    _eventHandlers: {},
    on(name, listener){
        if(!this._eventHandlers) this._eventHandlers = {}
        if(!this._eventHandlers[name])  this._eventHandlers[name] = []
        this._eventHandlers[name].push(listener)
    },
    off(name, listener){
        if(!this._eventHandlers) return;
        const listenerName = this._eventHandlers?.[name]
        if(!listenerName) return
        listenerName.forEach((current, i) => {
            if(listener === current) {
                this._eventHandlers[name].splice(i, 1)
            }
        })
    },
    trigger(name, ...args){
        const listeners = this._eventHandlers?.[name]
        if(!this._eventHandlers || !listeners.length) return;
        listeners.forEach(listener => listener.apply(this, args))
    }
}

class User{
    sum(a, b){
        return this.trigger("sum", a, b)
    }
}
Object.assign(User.prototype, eventMixins)

const user = new User()
function sum(a, b){
    console.log(a + b)
}
user.on("sum", sum)
user.off("sum", sum)
user.on('sum', (a, b) => console.log(a * b))
user.sum(5, 5)