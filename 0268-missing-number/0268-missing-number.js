/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     let range = nums.length;
       let expected = 0;
       let actual = 0;
       
       for(let i = 1 ; i <= range ; i++) {
           expected += i;
           actual += nums[i-1];
       }
       
       return expected - actual;
};