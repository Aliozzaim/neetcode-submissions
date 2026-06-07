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
     * @return {ListNode}
     */
    reverseList(head) {
        let cur = head
        let prev = null; // head
        while (cur) {
            //[0,null,2,3]
            let next = cur.next  // 1
            cur.next = prev
            prev = cur
            cur = next
        }
        return prev
    }
}
