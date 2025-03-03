/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
     if(head == null || head.next == null) return head;
    
    let cur = head;
    while(cur.next != null && cur != null){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next;
        }else cur = cur.next;
    }

    return head;

};