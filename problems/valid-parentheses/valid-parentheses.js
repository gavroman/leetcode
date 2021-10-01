const parenthesesMap = {
    '{': '}',
    '(': ')',
    '[': ']',
};

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function(s) {
    const stack = [];

    s.split('').forEach((char) => {
        const last = stack[stack.length - 1];

        if (parenthesesMap[last] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    });

    return stack.length === 0;
};
