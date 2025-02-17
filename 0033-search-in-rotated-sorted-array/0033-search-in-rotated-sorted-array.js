/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]==target) return mid
        else if(nums[l]<=nums[mid]){
            if(nums[l]<=target && target<=nums[mid]) r = mid
            else l = mid +1

        }else{
             if(nums[mid]<=target && target<=nums[r]) l = mid+1
            else r = mid 
        }
    }
    return -1
};