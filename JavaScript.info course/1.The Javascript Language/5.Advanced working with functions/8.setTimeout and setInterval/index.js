let timeout = setTimeout((name) => console.log("hello, %s", name), 2000, "Sanjarbek")

// setTimeout("console.log(true)", 500) // shows error in nodejs, but not in browser
console.log(timeout)
setTimeout(() => clearTimeout(timeout), 500)