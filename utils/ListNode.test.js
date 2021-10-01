import {arrayToList, listToArray, ListNode} from './ListNode';

describe('ListNode', () => {
    const arr = [1, 2, 3];
    const list = new ListNode(1, new ListNode(2, new ListNode(3)));

    it('arrayToList', () => {
        expect(arrayToList(arr)).toEqual(list);
    });


    it('listToArray', () => {
        expect(listToArray(list)).toEqual(arr);
    });
});
