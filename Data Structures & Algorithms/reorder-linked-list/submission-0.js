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
     * @return {void}
     */
    reorderList(head) {
        let curr = head;
        let reversedSecondHalf = null;
        let slow = head;
        let fast = head; 
// Input: head = [2,4,6]
// reversedSecondHalf: [10,8]
// Output: [2,10,4,8,6]

        while(fast && fast.next) {    
            slow = slow.next
            fast = fast.next.next
        }
        let secondHalf = slow.next;
        slow.next = null;
        while(secondHalf) {
            let next = secondHalf.next
            secondHalf.next = reversedSecondHalf
            reversedSecondHalf = secondHalf
            secondHalf = next
        }
        while (curr && curr.next && reversedSecondHalf) {
            let nextReversed = reversedSecondHalf.next
            let next = curr.next

            curr.next = reversedSecondHalf
            reversedSecondHalf.next = next

            curr = next 
            reversedSecondHalf = nextReversed
        }
    }
}
