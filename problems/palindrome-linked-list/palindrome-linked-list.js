import {reverseList} from '../reverse-linked-list/reverse-linked-list';

/**
 * convert to string
 * @param {ListNode} head
 * @return {boolean}
 */
export const isPalindrome2 = function(head) {
    let string = '';

    while (head) {
        string += head.val;
        head = head.next;
    }

    return string === string.split('').reverse().join('');
};

// with reversed list
export const isPalindrome3 = function(head) {
    let reversed = reverseList(head);

    while (head && reversed) {
        if (head.val !== reversed.val) {
            return false;
        }

        head = head.next;
        reversed = reversed.next;
    }

    return true;
};

export const isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    while (fast?.next) {
        fast = fast.next?.next;
        slow = slow.next;
    }

    let temp = null;
    let prev = null;

    while (slow) {
        temp = slow.next;
        slow.next = prev;

        prev = slow;
        slow = temp;
    }

    while (head && prev) {
        if (head.val !== prev?.val) {
            return false;
        }
        head = head.next;
        prev = prev?.next;
    }

    return true;
};


