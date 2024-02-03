/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];
  const temp = [];
  let i = 0;
  let r = 0;
  let reverse = false;
  while (i < this.length) {
    if (!temp[r]) temp[r] = [];
    temp[r].push(this[i]);
    i++;
    if (reverse === false && r === rowsCount - 1) {
      reverse = true;
      r++;
    } else if (reverse === true && r === 0) {
      reverse = false;
      r--;
    }
    reverse ? r-- : r++;
  }
  return temp;
};

const arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
console.log(arr.snail(5, 4)); // [[1,2,3,4]]
