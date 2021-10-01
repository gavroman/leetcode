/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
export const reverseBetween = function(head, left, right) {
    if (!head.next || left === right) {
        return head;
    }

    let node = head;

    let prev = null;
    let temp = null;
    let i = 1;

    let leftNode = null;

    while (node) {
        if (i === left - 1) {
            leftNode = node;
        }

        if (i >= left && i <= right) {
            temp = node.next;
            node.next = prev;
            prev = node;

            node = temp;
        } else {
            node = node.next;
        }

        i++;
    }

    if (leftNode) {
        leftNode.next.next = temp;
        leftNode.next = prev;
        return head;
    } else {
        head.next = temp;
        return prev;
    }
};
