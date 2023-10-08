const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Request-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Credentials", true)
    res.setHeader("Content-Type", "text/html")
    if(req.method === "OPTIONS"){
        res.writeHead(200)
        return res.end()
    }
    res.end("<h1>Hello world</h1>")
})
server.listen(4000, () => {
    console.log("Server is working")
})