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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            // skip current node
            prev.next = curr.next;
        } else {
            // move prev only if we keep node
            prev = curr;
        }

        curr = curr.next;
    }

    return dummy.next;
}
}
