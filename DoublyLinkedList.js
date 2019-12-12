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
    display() {
        let Arr = '[';
        if (this.head === null) {
            return Arr + ']'
        }
        let tempNode = this.head;
        while (tempNode.next !== null) {
            Arr += tempNode.value + ', ';
            tempNode = tempNode.next;
        }
        return Arr + tempNode.value + ']'
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
        if (this.head) {
            let x = this.head;
            let y = new Node(item, x, null);
            x.prev = y;
            this.head = y;
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

    insertAfter(newNode, target) {
        if (this.head === null) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null && (tempNode.value !== target)) {
                tempNode = tempNode.next;
            }
            let x = new Node(newNode, tempNode.next, tempNode)
            if (tempNode.next !== null) {
                tempNode.next.prev = x
            } else {
                this.tail = x;
            }
            tempNode.next = x;
        }
    }

    insertAt(newNode, index) {
        if (this.head === null || index === 0) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            let count = 0;
            while (tempNode.next !== null && count < index - 1) {
                count++;
                tempNode = tempNode.next;
            }
            let x = new Node(newNode, tempNode.next, tempNode);
            if (tempNode.next !== null) {
                tempNode.next.prev = x
            } else {
                this.tail = x;
            }
            tempNode.next = x;
        }
    }

    insertBefore(newNode, target) {
        if (this.head === null || this.head.value === target) {
            this.insertFirst(newNode);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null && (tempNode.value !== target)) {
                tempNode = tempNode.next;
            }
            let x = new Node(newNode, tempNode, tempNode.prev);
            if (tempNode.prev !== null) {
                tempNode.prev.next = x
            } else {
                this.head = x;
            }
            tempNode.prev = x;

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
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }
        if (this.tail.value === item) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            return;
        }
        let currNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
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
            currNode.prev = nextNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;
        this.tail = this.findLast();
    }
}

function mainDLL() {
    let SLL = new LinkedList();
    let CLL = new LinkedList();
    SLL.insertLast('A');
    SLL.insertLast('B');
    SLL.insertLast('C');
    SLL.insertLast('D');
    SLL.insertLast('E');
    SLL.insertLast('F');
    SLL.insertFirst('S');

    // '[0 1 2 3 4 5 6]'
    // '[S A B C D E F]'


    console.log(SLL.display());
    console.log(SLL.reverseList());
    console.log(SLL.display());
    console.log(SLL.tail);
    console.log(SLL.head);
}

mainDLL();