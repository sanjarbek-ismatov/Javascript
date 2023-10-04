const decoder = new TextDecoder()
const encoder = new TextEncoder()
// const blob = new Blob(["<html><body><p>Hello world</p></body></html>", encoder.encode("<script>console.log('Hello world')</script>")], {
//   type: "text/html",
// });
// blob.arrayBuffer().then(buffer => {
//     const uint8Array = new Uint8Array(buffer)
//     const decoded = decoder.decode(uint8Array)
//     console.log(decoded)
// })

// const url = URL.createObjectURL(blob)
// console.log(url)

const IMAGE_URL = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";
(async () => {
    const res = await fetch(IMAGE_URL)
    const data = await res.blob()
    // data.arrayBuffer().then(buffer => console.log(new Uint8Array(buffer)))
    const reader = new FileReader()
    reader.readAsDataURL(data)
    reader.onload = function(){
        document.write(`<img src="${reader.result}">`)
    }
})()

const link = document.createElement('a')
link.download = "sample.txt"
const blob = new Blob(['Hello sanjarbek'], {type: "text/plain"})
const url = URL.createObjectURL(blob)
link.href = url
document.body.firstElementChild.onclick = function(){
    link.click()
}
