class CustomArray{
    constructor() {
        this.obj = {
            length: 0,
            current: 0,
            [Symbol.isConcatSpreadable]: true,
            [Symbol.iterator]: function* (){
                while(this.current < this.length){
                    yield this[this.current++]
                }
            }

        }
    }
    push(...items) {
        if(Array.isArray(items)){
            for(const item of items){
                this.obj[this.obj.length++] = item
            }
        }
    }
    toString() {
        let string = ""
        for(let i = 0; i < this.obj.length - 1; i++){
            string += this.obj[i] + ", "
        }
        string += this.obj[this.obj.length - 1]
        return string
    }
    valueOf(){
        return this.obj
    }
}
const array = new CustomArray()
array.push(10)
array.push(20, 30)
console.log(String(array))
console.log(array)
for(const item of array.valueOf()){
    console.log(item)
}
