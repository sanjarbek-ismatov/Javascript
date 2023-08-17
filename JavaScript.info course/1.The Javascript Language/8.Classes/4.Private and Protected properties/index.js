"use strict"
class Person{
    // /** @private
    //  * @type {boolean}
    //  */
    // let boyfriend;
    // /**
    //  * @private
    //  * @type {boolean}
    //  */
    // let girlfriend
    #name;
    #gender;
    #boyfriend;
    #girlfriend;
    constructor(name, gender) {
        this.#name = name
        this.#gender = gender

        this.#boyfriend = gender === 'female'

        this.#girlfriend = gender === 'male'
    }
    get name(){
        return this.#name
    }
    set name(val){
        this.#name = val
    }
}
class Programmer extends Person{
    constructor(props) {
        super(props);
        console.log(this['#name']) // undefined
    }

}
const programmer = new Programmer("Sanjarbek", "male")
console.log(programmer.name)
// console.log(person.#name)
// person.name = "Sardor"