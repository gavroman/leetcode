import {searchInsert} from './search-insert-position';

it.each([
    [[1, 3, 5, 6], 5, 2],
    [[1, 3, 5, 6], 2, 1],
    [[1, 3, 5, 6], 7, 4],
    [[1, 3, 5, 6], 0, 0],
    [[1], 0, 0],
])('searchInsert(%p, %p) returns %p', (nums, target, result) => {
    expect(searchInsert(nums, target)).toEqual(result);
});

