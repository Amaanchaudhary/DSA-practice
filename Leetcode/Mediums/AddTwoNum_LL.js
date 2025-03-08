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
    let dummy = new ListNode(0)
    let current = dummy
    let carry = 0

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0
        let y = (l2 !== null) ? l2.val : 0
        let sum = x + y + carry

        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next

        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }

    if (carry > 0) {
        current.next = new ListNode(carry)
    }

    return dummy.next
}

let l1 = createLL([5, 6, 3])
let l2 = createLL([5, 6, 4])
console.log(addTwoNumber(l1, l2));

