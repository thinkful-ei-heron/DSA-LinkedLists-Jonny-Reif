class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    findLast() {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }
    insertFirst(item) {
        if(this.tail) {
            this.head = new Node(item, this.head, null);
        } else {
            const x = new Node(item, this.head, null);
            this.head = x;
            this.tail = x;
        }

    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let x = this.findLast();
            let y = new Node(item, null, x);
            x.next = y;
            this.tail = y;
        }
    }
    insertAfter(newNode, target) { /// A B C D    after C      A B C E D
        if (this.head === null) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            let prevNode = null;
            while (tempNode.next !== null && (tempNode.value !== target)) {
                prevNode = tempNode
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(newNode, tempNode.next, prevNode);
        }
    }

    insertAt(newNode, index) {
        if (this.head === null) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            let prevNode = this.head;
            let count = 0;
            while (tempNode.next !== null && count < index) {
                count++;
                prevNode = tempNode;
                tempNode = tempNode.next;

            }
            prevNode.next = new Node(newNode, tempNode);
        }
    }

    insertBefore(newNode, target) {
        if (this.head === null || this.head.value === target) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            let prevNode = this.head;
            while (tempNode.next !== null && (tempNode.value !== target)) {
                prevNode = tempNode;
                tempNode = tempNode.next;
            }
            prevNode.next = new Node(newNode, tempNode);
        }
    }



    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    reverseList() {
        if (!this.head) {
            return null;
        }
        let currNode = this.head;
        let prevNode = null;
        while (currNode !== null) {
            let nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;
    }
}

function main() {
    let SLL = new LinkedList();
    let CLL = new LinkedList();
    SLL.insertLast('A');
    SLL.insertLast('B');
    SLL.insertLast('C');
    SLL.insertLast('D');
    SLL.insertLast('E');
    SLL.insertLast('F');

    console.log(SLL.find('A'));
    console.log(SLL.head);
    console.log(SLL.tail);
}

main();