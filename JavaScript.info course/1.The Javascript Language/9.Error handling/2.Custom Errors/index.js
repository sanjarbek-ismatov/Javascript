
class ValidationError extends Error{
    constructor(message) {
        super(message);
        this.name = this.constructor.name
    }
}
class PropertyError extends ValidationError{
    constructor(property) {
        super(`there's no property: ${property}`);
        this.property = property
    }
}
const user = `{
    "name": "Sanjarbek",
    "age": 17
}`

if(!JSON.parse(user).isMarried) {
    // throw new ValidationError("user age have to be greater than 18 or equal")
    throw new PropertyError("isMarried")
}