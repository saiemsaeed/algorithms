class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let previous = null;
        let current = this.head;
        while(current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
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
        this.length--;
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = current;
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
        if(index == 0) return !!this.unshift(val);
        let previousNode = this.get(index - 1);
        let newNode = new Node(val);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index == this.length - 1) return this.pop();
        if(index == 0) return this.shift();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
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
            previous = current;
            current = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();

list.push("80");
list.push("81");
list.push("82");
list.push("83");
list.push("84");
list.push("85");
