class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
             int[] result = new int[nums.length];
    for (int i = 0; i < nums.length; i++) {
        for (int j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                result[i] = result[i] +1;
            } else if(nums[j] != nums[i]){
                result[j] = result[j] +1;
            }
        }
    }
    return result;
    }
}