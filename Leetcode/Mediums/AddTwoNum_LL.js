function ListNode(val = 0, next = null) {
    this.val = val
    this.next = next
}

function createLL(arr) {
    if (arr.length == 0) return null
    let head = new ListNode(arr[0])
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}

function addTwoNumber(l1, l2) {
    const dummy = new ListNode()  // Dummy node to simplify result list creation
    let current = dummy  // Pointer to track the current node in the result list
    let carry = 0  // To store carry value from sum

    // Loop until both lists are fully traversed
    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0  // Get value from l1, or 0 if l1 is null
        let y = (l2 !== null) ? l2.val : 0  // Get value from l2, or 0 if l2 is null
        let sum = x + y + carry  // Sum of both digits and carry

        carry = Math.floor(sum / 10)  // Compute new carry for next iteration
        current.next = new ListNode(sum % 10)  // Create a new node with the sum's last digit
        current = current.next  // Move to the next node

        if (l1 !== null) l1 = l1.next  // Move to next node in l1
        if (l2 !== null) l2 = l2.next  // Move to next node in l2
    }

    // If there's any carry left, create a new node for it
    if (carry) {
        current.next = new ListNode(carry)
    }

    return dummy.next  // Return the result list, skipping the dummy node
}

let l1 = createLL([5, 6, 3])
let l2 = createLL([5, 6, 4])
console.log(addTwoNumber(l1, l2));

