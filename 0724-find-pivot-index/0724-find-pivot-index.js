/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let totalSum = 0 
   let curentSum = 0

   for(let i=0; i<nums.length; i++){
    totalSum += nums[i]
   } 

   for(let i=0; i<nums.length; i++){
    if(totalSum - (curentSum + nums[i])=== curentSum) return i
    curentSum += nums[i]
   }
   return -1
};