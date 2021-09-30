/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome2 = function (x) {
  if (x < 0) {
    return false;
  }

  const arr = [];

  let rest = 0;
  let divider = 10;

  while (rest !== x) {
    rest = x % divider;
    arr.push(Math.floor(rest / (divider / 10)));
    divider *= 10;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }

  return true;
};

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let reversed = 0;

  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    reversed = reversed * 10 + i % 10;
  }

  return reversed === x;
}
