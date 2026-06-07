/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        let slow = head;
        let fast = head;

        // 1. find middle
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        while (slow) {
            let next = slow.next;
            slow.next = prev;
            prev = slow
            slow = next
        }

        let left = head;
        let right = prev;

        while (right) {
          if (left.val !== right.val) return false;

            left = left.next;
            right = right.next;
        }

        return true;
    }
}
