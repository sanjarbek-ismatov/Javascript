const range = {
    from: 1,
    to: 10,
    // [Symbol.asyncIterator](){
    //     return {
    //         current: this.from,
    //         last: this.to,
    //         async next(){
    //             if(this.current === this.last) return {done: true, value: undefined}
    //             else{
    //                 return {
    //                     done: false,
    //                     value: await Promise.resolve(this.current++)
    //                 }
    //             }
    //         }
    //     }
    // }
    async *[Symbol.asyncIterator](){
        for(let i = this.from; i <= this.to; i++){
            yield await Promise.resolve(i)
        }
    },
    *[Symbol.iterator](){
        for(let i = this.from; i <= this.to; i++){
            yield i
        }
    }
};
// async function* asyncGenerator(from, to){
//    while(from <= to){
//        yield await Promise.resolve(from++)
//    }
// }
(async () => {
    for await (const value of range){
        console.log(value)
    }
    for (const value of range){
        console.log(value)
    }
    // for await (const value of asyncGenerator(1, 10)){
    //     console.log(value)
    // }
    // console.log(await asyncGenerator(1, 10).next())
})()
