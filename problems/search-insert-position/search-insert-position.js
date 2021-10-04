/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = function(nums, target) {
    if (nums[0] > target) {
        return 0;
    }

    if (nums[nums.length - 1] < target) {
        return nums.length;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right - 1) {
        const middle = Math.floor((right + left) / 2);

        if (target < nums[middle]) {
            right = middle;
        } else {
            left = middle;
        }
    }

    return nums[left] === target ? left : right;
};
