/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0
    nums.sort((a,b)=>a-b)
    let longest = 0, counter = 1, cur = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i-1]==nums[i]) continue;
        else if(nums[i-1]+1 == nums[i]) counter++;
        else{
            longest = Math.max(counter , longest)
            counter =1
        }
    }return Math.max(longest, counter);
};