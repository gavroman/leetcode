import {longestCommonPrefix} from './longest-common-prefix';

describe('longest-common-prefix', () => {
  it.each([
    [['flower', 'flow', 'flight'], 'fl']
  ])('base cases', (strs, expected) => {
    expect(longestCommonPrefix(strs)).toEqual(expected);
  });

  it.each([
    [[], '']
  ])(' borderline cases', (strs, expected) => {
    expect(longestCommonPrefix(strs)).toEqual(expected);
  });

})
