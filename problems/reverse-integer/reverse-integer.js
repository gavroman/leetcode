/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const max = '' + Math.pow(2, 31);
  const sign = x < 0 ? '-' : '';

  let str = ('' + x)
    .split('')
    .reverse()
    .join('')
    .replace('-', '');

  console.log(str);
  if (str.length < max.length) {
    str = '0'.repeat(max.length - str.length) + str;
  }
  console.log(str);

  for (let i = 0; i !== str.length; i++) {
    if (str[i] > max[i]) {
      return 0;
    } else if (str[i] < max[i]) {
      break;
    }
  }

  return Number(sign + str);
};
