import {isValid} from './valid-parentheses';

describe('valid-parentheses', () => {
    it.each([
        ['()', true],
        ['()[]{}', true],
        ['(]', false],
        ['([)]', false],
        ['{[]}', true],
        ['(){}}{', false],
    ])('isValid(%p) returns %p', (string, expected) => {
        expect(isValid(string)).toEqual(expected);
    });
});


