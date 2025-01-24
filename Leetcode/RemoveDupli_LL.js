
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//function to create single Node
function ListNode(val = 0, next = null) {
    this.val = val,
    this.next = next
}

//function to create LL from array
function createLL(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head
}

//function to print print LL
function printLL(head, ...args) {
    // console.log(head,"checking");
    
    let current = head
    let result = ''
    while (current !== null) {
        result += current.val + "-> "
        current = current.next
    }
    result += "null"
    console.log(result, ...args);
}

var deleteDuplicates = function (head) {
    // If list is empty or has only one node, return as no duplicates exist
    if (head == null || head.next == null) {
        return head;
    }

    let current = head; // Start from the first node

    while (current.next !== null) { // Traverse until the last node
        if (current.next.val === current.val) {
            // If duplicate found, skip the next node by changing pointer
            current.next = current.next.next;
        } else {
            // Move to the next distinct node
            current = current.next;
        }
    }

    return head; // Return the modified linked list
};


console.log("original LinkedList:-");
let LL = createLL([1, 1, 2, 3, 3]); // Create a linked list
printLL(LL)

console.log("REVISED LinkedList:-");
console.log(deleteDuplicates(LL))









