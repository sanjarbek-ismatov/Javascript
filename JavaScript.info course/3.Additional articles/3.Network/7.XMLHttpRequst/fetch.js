/**
 * Advanced fetch function
 * @param {string | URL} url
 * @param {RequestInit} config
 * @returns {Promise<unknown>}
 */
async function fetch2(url, config){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(config.method, url)
        xhr.responseType = "text"
        for(const [key, value] of config.headers){
            xhr.setRequestHeader(key, value)
        }
        const contentType = config.headers.get('Content-Type')
        if(contentType === "application/json"){
            const json = JSON.stringify(config.body)
            xhr.send(json)
        } else if(config.body instanceof FormData){
            xhr.send(config.body)
        }
        config.signal.addEventListener('abort', () => {
            xhr.abort()
        })
        const stream = new ReadableStream({
            start(controller){
                xhr.onprogress = function(event){
                    controller.enqueue(xhr.responseText)
                }
                xhr.onload = function(){
                    controller.close()
                }
            }
        })
        xhr.onloadstart = function(){
            resolve(stream)
        }
        xhr.onerror = function(){

        }
        xhr.upload.onprogress = function(){

        }
        xhr.upload.onload = function(){

        }
        xhr.upload.onerror = function(){

        }
    })
}
fetch2('https://jsonplaceholder.typicode.com/users', {
    method: "GET",
    headers: {
        ['Content-Type']: "application/json"
    }
}).then(res => {
    console.log(res)
})