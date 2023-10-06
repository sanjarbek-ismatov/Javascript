( async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response.ok) // true
    console.log(response.url)
    console.log(response.status)
    console.log(response.headers.get('Content-Type'))
})();