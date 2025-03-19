// NodeList class to represent a single node in the linked list
class NodeList {
    constructor(val, next = null) {
        this.val = val; // The value of the node
        this.next = next; // Points to the next node in the list, default is null
    }
}

// LinkedList class to manage the entire list
class LinkedList {
    constructor() {
        this.head = null; // The head (first node) of the list
    }

    // Method to add a new node at the end of the list
    append(val) {
        const newNode = new NodeList(val); // Create a new node
        if (this.head === null) { // If the list is empty
            this.head = newNode; // Set the new node as the head
            return;
        }
        let current = this.head; // Start from the head
        while (current.next !== null) { // Traverse until the last node
            current = current.next; // Move to the next node
        }
        current.next = newNode; // Set the last node's next to the new node
    }

    // Method to display the entire list
    display() {
        let current = this.head; // Start from the head
        let result = ''; // To build the string representation of the list
        while (current !== null) {
            result += current.val + ' -> '; // Add the current node's value to result
            current = current.next; // Move to the next node
        }
        result += 'null'; // The last node points to null, indicating the end of the list
        console.log(result);
    }
}

// Example usage of the LinkedList class
const list = new LinkedList(); // Create a new LinkedList instance

list.append(10); // Add node with value 10
list.append(20); // Add node with value 20
list.append(50); // Add node with value 30
list.append(70); // Add node with value 40

list.display(); // Output: 10 -> 20 -> 30 -> 40 -> null