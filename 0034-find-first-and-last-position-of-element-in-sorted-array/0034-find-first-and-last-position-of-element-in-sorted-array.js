/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 function binarySearch(nums, target,firstPos){
   let ans = -1, first=0, last = nums.length-1;
   while(first<=last){
    let mid = Math.floor((first+last)/2)
    if(nums[mid]==target){
        ans = mid;
        if(firstPos) last = mid-1
        else first = mid+1
    }else if(nums[mid]>target) last = mid-1
    else first = mid+1
   }

   return ans

 }
var searchRange = function(nums, target) {
    let arr = new Array(2);

    arr[0] = binarySearch(nums, target, true)

    arr[1] = binarySearch(nums, target, false)

    return arr
};