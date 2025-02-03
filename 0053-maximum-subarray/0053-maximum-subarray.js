/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0
    let maxSum = nums[0]
    for(let i=0; i<nums.length; i++){
        currentSum += nums[i]
        maxSum = Math.max(currentSum, maxSum)
        if(currentSum<0){
            currentSum = 0
        }
    }
    return maxSum
};