/**
 * Tower of Hanoi algorithm
 * @param {number} n count of disks
 * @param fromRod first rod
 * @param toRod last rod
 * @param usingRod using rod
 * @returns {void}
 */
function towerOfHanoi(n, fromRod, toRod, usingRod){
    if(n === 0) return;
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`${n} disk was moved from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, "A", "C", "B")
