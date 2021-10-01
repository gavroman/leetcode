/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    let counter = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const chars = new Set(strs.map((str) => str[counter]));

        if (chars.size === 1 && !chars.has(undefined)) {
            counter++;
        } else {
            return strs[0]?.substring(0, counter) || '';
        }
    }
};
