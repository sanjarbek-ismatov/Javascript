const controller = new AbortController();
const abort = new Promise((resolve, reject) => {
   controller.signal.addEventListener('abort', reject)
   console.log(controller.signal.aborted)
});
// (async () => {
//     try{
//         await fetch('https://jsonplaceholder.typicode.com/users', {
//             signal: controller.signal
//         })
//     } catch (error){
//         console.log(error.name)
//     }
// })()
const urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/users']
let fetchJobs = urls.map(url => fetch(url, { // fetches
    signal: controller.signal
}));
Promise.all([...fetchJobs, abort]).then(value => console.log(value)).catch(err => console.log(err))