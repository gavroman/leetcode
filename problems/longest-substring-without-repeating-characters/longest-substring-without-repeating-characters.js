/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const symbols = new Map();
  let startOfWindow = 0;
  let max = 0;

  const arr = s.split('');

  arr.forEach((char, i) => {
    const position = symbols.get(char);

    if (position >= startOfWindow) {
      startOfWindow = position + 1;
    }

    const currentLength = i - startOfWindow + 1

    symbols.set(char, i);
    max = Math.max(max, currentLength);
  })

  return max;
};
