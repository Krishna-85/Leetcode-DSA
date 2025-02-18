/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let first =0, last=nums.length-1;
    while(first<last){
        let mid = Math.floor((first+last)/2)
       if(nums[mid]>nums[last]) first= mid+1
       else last = mid
    }
    return nums[first]
};