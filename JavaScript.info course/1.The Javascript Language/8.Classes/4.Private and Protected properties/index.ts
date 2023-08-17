
class Person{
    name: string;
    gender: "male" | "female";
    private boyfriend: boolean | null = null;
    private girlfriend: boolean | null = null;
    protected isMarried: boolean;
    constructor(name: string, gender: "male" | "female") {
        this.name = name
        this.gender = gender
        this.boyfriend = gender === 'female'
        this.girlfriend = gender === 'male'
        this.isMarried = true
    }
    getName(){
        return this.name
    }
}
class Programmer extends Person{
    constructor(name: string, gender: "male" | "female") {
        super(name, gender);
        this.isMarried = false
    }
}
const person = new Person('Sanjarbek', 'male')
// person.girlfriend
