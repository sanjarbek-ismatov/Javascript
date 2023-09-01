function* generator(){
    yield 1
    yield 2
    yield 3
    return 4
}
function generatorCustom(){

    return {
        next(){
            return {
                value
            }
        }
    }
}
const gn1 = generator()
console.log(gn1.next().done)
console.log(gn1.next().done)
console.log(gn1.next().done)
console.log(gn1.next().done)

