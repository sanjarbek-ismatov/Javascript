const obj = {
    sayHello(){
        console.log("hi")
    }

}
delete obj.func?.sayGoodBye
console.log(obj.name?.first)
obj.sayHello?.()
obj?.["sayHello"]?.()