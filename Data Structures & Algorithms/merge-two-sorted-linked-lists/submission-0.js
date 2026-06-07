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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l = list1
        let l2 = list2
        let dummy = new ListNode(0);
        let tail = dummy;
        while(l && l2) {
            if (l.val <= l2.val) {
                tail.next = l
                l = l.next
            } else {
                tail.next = l2
                l2 = l2.next
            }
            tail = tail.next
        }
        tail.next = l || l2
        return dummy.next
    }
}
