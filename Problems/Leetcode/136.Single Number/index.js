/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single;
    let i = 0;
    while(i < nums.length){
        let temp = nums[i]
        if(nums.filter(e => e === temp).length <= 1)
            single = temp
        i++;
    }
    return single
};
console.log(singleNumber([4,1,2,1,2]))