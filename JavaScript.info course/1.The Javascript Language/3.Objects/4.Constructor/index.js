function MakeUser(name){
    if(!new.target) return new MakeUser(name)
    this.name = name
    this.newYet = true
}
const alice = new MakeUser("Alice")
const broGuyWhoMissedCallNew = MakeUser("Bro")
const anonymous = new function(){
    this.name = "Anonymous"
    this.newYet = false
}
console.log(alice.name)
console.log(anonymous.name)
console.log(broGuyWhoMissedCallNew.name)

function MakeUserFake(name){
    if(!new.target) return new MakeUserFake(name)
    this.name = name
    return {name: "Fucked name"}
    // return
}
console.log(MakeUserFake("Sanjarbek"))

const withoutParentheses = new MakeUserFake
console.log(withoutParentheses.name)