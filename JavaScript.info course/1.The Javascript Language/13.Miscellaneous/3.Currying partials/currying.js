function curry(func){
    return function currying(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        } else {
            return function(...args2){
                return currying.apply(this, args.concat(args2))
            }
        }
    }
}
function sum(a, b, c){
    return a + b + c
}
const curriedSum = curry(sum)
console.log(curriedSum(1, 2)(3))