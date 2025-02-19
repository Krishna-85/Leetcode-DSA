/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let arr = []
    for(let i=0; i<nums2.length; i++){
        if(set.has(nums2[i])&& !arr.includes(nums2[i])){
            arr.push(nums2[i])
        }
    }
    return arr
};