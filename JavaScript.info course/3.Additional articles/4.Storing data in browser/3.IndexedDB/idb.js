class IndexedDB{
    async open(name, version){
        return new Promise((resolve, reject) => {
           const request =  indexedDB.open(name, version)
            request.onsuccess = function(event){
               resolve(event.target)
            }
            request.onerror = function(event){
                reject(event.target)
            }
        })
    }
}
export default IndexedDB