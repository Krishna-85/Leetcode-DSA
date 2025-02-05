class Solution {
public:
     #include <iostream>
#include <vector>
 

int trap(vector<int>& height) {
    int n = height.size();
    if (n == 0) return 0;

    vector<int> leftMax(n), rightMax(n);
    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];

    for (int i = 1; i < n; i++)
        leftMax[i] = max(leftMax[i - 1], height[i]);

    for (int i = n - 2; i >= 0; i--)
        rightMax[i] = max(rightMax[i + 1], height[i]);

    int trappedWater = 0;
    for (int i = 0; i < n; i++)
        trappedWater += min(leftMax[i], rightMax[i]) - height[i];

    return trappedWater;
}

int main() {
    vector<int> height = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << "Trapped water: " << trap(height) << endl;
    return 0;
}

};