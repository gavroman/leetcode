/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashMap = new Map();

    nums.forEach((num, index) => hashMap.set(num, index));

    for(let i = 0; i !== nums.length; i++) {
        const num = nums[i];
        const currentValue = hashMap.get(target - num);

        if (currentValue && currentValue !== i) {
            return [i, currentValue]
        }
    }
};
