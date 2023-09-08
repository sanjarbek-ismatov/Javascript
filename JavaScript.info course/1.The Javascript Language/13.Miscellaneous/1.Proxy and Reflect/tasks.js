// let user = {
//     name: "John"
// };
//
// function wrap(target) {
//     return new Proxy(target, {
//         get(target, p, receiver) {
//             if(p in target) return Reflect.get(target, p, receiver)
//             throw new ReferenceError(`Property doesn't exist: "${p}"`)
//         }
//     });
// }
//
// user = wrap(user);

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, p, receiver) {
        return target[target.length + +p]
    }
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2

function makeObservable(target) {
    const handlers = []
    target.observe = function(handler){
        handlers.push(handler)
    }
    return new Proxy(target, {
      set(target, p, newValue, receiver) {
          const success = Reflect.set(...arguments)
          handlers.forEach(handler => handler(p, target[p]))
          return success
      }
    })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // alerts: SET name=John