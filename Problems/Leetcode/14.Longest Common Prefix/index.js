/**
 * 14
 * Longest Common Prefix
 * Example:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"

 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.

 */

// Solution

function longestCommonPrefix(strs){
    // define the longest prefix as first element of array
    let prefix = strs[0]

    // iterate the elements are started with 1 index of array
    for(let i = 1; i < strs.length; i++){
        // write second loop with while to check that the prefix is available in second
        while(strs[i].indexOf(prefix) !== 0){
            // set prefix to shorter
            prefix = prefix.slice(0, prefix.length - 1)
            // check if prefix remained, return empty string
            if(!prefix) return ""
        }
    }
    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))