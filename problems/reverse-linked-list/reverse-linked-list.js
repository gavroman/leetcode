import {ListNode} from 'utils/ListNode';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList1 = function (head) {
  if (!head) {
    return head;
  }

  let reversed = new ListNode(head.val);

  head = head.next;

  while (head) {
    const node = new ListNode();
    node.val = head.val;
    node.next = reversed;
    reversed = node;

    head = head.next;
  }

  return reversed;
};

// in memory
export const reverseList = function (head) {
  let prev = null;
  let temp = null;

  while (head) {
    temp = head.next;
    head.next = prev;
    prev = head;

    head = temp;
  }

  return prev;
}
