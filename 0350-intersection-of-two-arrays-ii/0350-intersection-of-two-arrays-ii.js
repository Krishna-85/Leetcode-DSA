/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map()
    for(let i =0; i<nums1.length; i++){
        if(map.has(nums1[i])) map.set(nums1[i], map.get(nums1[i])+1)
        else map.set(nums1[i], 1)
        // map.set(nums1[i], (map.get(nums[i])|| 0)+1);
    }
    let ans = []
    for(let i=0; i<nums2.length; i++){
        if(map.has(nums2[i]) && map.get(nums2[i])>0 ){
            ans.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i])-1)
        }
    }
    return ans;
};