const encoder = new TextEncoder()
const decoder = new TextDecoder()
const uint8Array = encoder.encode("Sanjarbek")
console.log(decoder.decode(uint8Array)) // Sanjarbek