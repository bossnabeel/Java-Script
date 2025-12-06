class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    print() {
        let output = '';
        let current = this.head;
        while (current !== null) {
            output += current.value;
            if (current.next !== null) {
                output += ' -> ';
            }
            current = current.next;
        }
        console.log(output)
    }
    push(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    append(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        return;
    }
    shift() {
        if (this.head === null) return;
        this.head = this.head.next;
    }
    pop() {
        if (this.head === null) return;
        if (this.head.next === null) return;
        let temp = this.head;
        while (temp.next.next !== null) {
            temp = temp.next;
        }
        temp.next = null;
    }

}

let list = new LinkedList()
for (let i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random()*100));
}
list.print()
list.shift();
list.print();
list.pop();
list.print();
list.append(10);
list.print();
list.push(1);
list.print();