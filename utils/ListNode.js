/**
 * Definition for singly-linked list.
 * @param {*} [val]
 * @param {ListNode | null} [next]
 */
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * array to list
 * @param {[]} array
 * @return {ListNode}
 */
export function arrayToList(array) {
    let list = new ListNode();
    const head = list;

    array.forEach((element) => {
        list.next = new ListNode(element);
        list = list.next;
    });

    return head.next;
}

/**
 * list to array
 * @param {ListNode} list
 * @return {[]}
 */
export function listToArray(list) {
    const arr = [];

    while (list) {
        arr.push(list.val);
        list = list.next;
    }

    return arr;
}
