// async function error(){
//     throw new Error("Error")
// }
// error().catch(err => console.log("Error has been caught"));
// (async () => {
//     try {
//         await error()
//     }catch (ex){
//         console.log(ex.message)
//     }
// })()

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        });
}

// Ask for a user name until github returns a valid user
function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Full name: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

async function loadJsonAsync(url){
    const res = await fetch(url)
    if(res.status === 200) return await res.json()
    throw new HttpError(response)
}
async function demoGithubUserAsync(){
    let name = "sanjarbek-ismatov"
    const user = await loadJson(`https://api.github.com/users/${name}`).catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
            console.log("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    })
    console.log(`Full name: ${user.name}.`)

}
demoGithubUserAsync()