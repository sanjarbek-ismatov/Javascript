const obj = {
    type: "string"
}
obj.method = function(){
    return this.type
}
obj.methodWithArrow = () => {
    return this
}
// console.log(obj.method(), obj.methodWithArrow())
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

// console.log( user.ref.name ); // What's the result?

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this
    }
};
ladder.up().up().up()
console.log(ladder.step)