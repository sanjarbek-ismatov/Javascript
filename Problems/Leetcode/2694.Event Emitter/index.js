class EventEmitter {
    #actions;
    constructor(){
        this.#actions = {}
    }
    subscribe(event, cb) {
        if(!this.#actions) this.#actions = {}
        if(!this.#actions?.[event]) this.#actions[event] = [cb]
        else this.#actions[event].push(cb)
        return {
            unsubscribe: () => {
                this.#actions[event].forEach((callback, index) => {
                    if(callback === cb){
                        this.#actions[event].splice(index, 1)
                    }
                })
            }
        }
    }

    emit(event, args = []) {
        const result = []
        this.#actions?.[event].forEach((cb, index) => {
            result.push(cb(...args))
        })
        return result
    }
}
const emitter = new EventEmitter()
emitter.subscribe('sum', (a, b) =>  a + b).unsubscribe()
console.log(emitter.emit('sum', [1, 2]))
/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */