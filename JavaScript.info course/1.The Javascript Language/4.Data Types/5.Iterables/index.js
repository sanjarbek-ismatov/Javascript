const obj1 = {
    from: 0,
    to: 10,
    [Symbol.iterator](){
        return {
            current: this.from,
            last: this.to,
            next(){
                if(this.current <= this.last)
                    return {done: false, value: this.current++}
                 else return {done: true}
            }
        }
    }
}
const obj2 = {
    from: 0,
    to: 10,
    [Symbol.iterator](){
        return this
    },
    next(){
        if(this.from <= this.to) return {done: false, value: this.from++}
        else return {done: true}
    }
}

function generator1(start, end){
    return {
        [Symbol.iterator](){
          return this
        },
        next(){
            if(start <= end) return {done: false, value: start++}
            else return {done: true}
        }
    }

}
function* generator2(start, end){
    while(start <= end) {
        yield start
        start++
    }
}
const gen1 = generator1(1, 10)
const gen2 = generator2(1, 10)
// console.log(gen1.next().value, gen2.next().value)
// console.log(gen1.next().value, gen2.next().value)
// console.log(gen1.next().value, gen2.next().value)
// console.log(gen1.next().value, gen2.next().value)
for(const item of gen1){
    console.log(item)
}
for(const item of gen2){
    console.log(item)
}
