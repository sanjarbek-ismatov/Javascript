function loadJS(src, cb){
    const script = document.createElement('script')
    script.src = src
    script.onload = () => cb(script)
    document.body.append(script)
}
loadJS('./custom.js', script => {
    console.log(script.src)
    loadJS('./second.js', script => {
        console.log(script.src)
    })
})