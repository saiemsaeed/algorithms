class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; 
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        this.tail = this.tail.previous;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        } 
        return previous;
    }

    // Removes Item from Start of SinglyLinkedList
    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.head.previous = null;
        this.length--;
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = Node(val);
        let current = this.head;
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = current;
            current.previous = newNode;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let previous = this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = previousNode.next;
        newNode.previous = previousNode;
        previousNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index == this.length - 1) return this.pop();
        if(index == 0) return this.shift();
        let previous = this.get(index - 1);
        let next = previous.next.next;
        next.previous = previous;
        previous.next = next;
        this.length--;
        return removed;
    }

    reverse() {
        let previous = null;
        let next = null;
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        while(current != null) {
            next = current.next;
            current.next = previous;
            current.previous = next;
            previous = current;
            current = next;
        }
        return this;
    }
}

let list = new DoublyLinkedList();

list.push("80");
list.push("81");
list.push("82");
list.push("83");
list.push("84");
list.push("85");
