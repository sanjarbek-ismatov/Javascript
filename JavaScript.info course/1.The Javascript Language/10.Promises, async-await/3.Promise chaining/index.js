Promise.resolve(0).then(data => {
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    })
}).then(data => {
    console.log(data)
   return new Promise((resolve, reject) => {
       setTimeout(() => resolve(2), 1000)
   })
}).then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(res => res.json()).then(data => {
    console.log("First data has been fetched")
    console.log(data)
    return fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
}).then(res => res.json()).then(data => {
    console.log("Second data has been fetched")
    console.log(data)
})