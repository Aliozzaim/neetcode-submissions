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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
getIntersectionNode(headA, headB) {
    let lengthA = 0;
    let lengthB = 0;

    let a = headA;
    while (a) {
        lengthA++;
        a = a.next;
    }

    let b = headB;
    while (b) {
        lengthB++;
        b = b.next;
    }

    a = headA;
    b = headB;

    let diff = Math.abs(lengthA - lengthB);

    if (lengthA > lengthB) {
        while (diff > 0) {
            a = a.next;
            diff--;
        }
    } else {
        while (diff > 0) {
            b = b.next;
            diff--;
        }
    }

    while (a && b) {
        if (a === b) {
            return a;
        }
        a = a.next;
        b = b.next;
    }

    return null;
}
}
