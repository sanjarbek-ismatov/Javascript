const blob = new Blob(['Hello Sanjarbek', "No no"], {
    type: "text/plain"
})
// blob.arrayBuffer().then(buffer => {
//     console.log(new Uint8Array(buffer))
// })
const readableStream = blob.stream()
const reader = readableStream.getReader();
(async () => {
    while(true) {
        const {done, value} = await reader.read()
        if(done) break
        console.log(value)
    }
})()