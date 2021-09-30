import {ListNode} from '../../utils/ListNode';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

export const addTwoNumbers = function (l1, l2) {
  let resultNode;
  let overflow = false;
  let currentNode = new ListNode();

  while (l1 !== null || l2 !== null) {
    let sum = (l1 && l1.val) + (l2 && l2.val) + overflow;
    overflow = sum >= 10;

    if (overflow) {
      sum -= 10;
    }

    const newNode = new ListNode(sum);

    if (!resultNode) {
      resultNode = newNode;
    } else {
      currentNode.next = newNode;
    }

    currentNode = newNode;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  if (overflow) {
    currentNode.next = new ListNode(1);
  }

  return resultNode;
};
