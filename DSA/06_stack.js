export class Stack {
    constructor() {
        this.stack = []
    }

    push(element) {
        // Push the element to the top/end of the stack.
        this.stack.length = this.stack.length + 1
        this.stack[this.stack.length - 1] = element;
        return true;
    }

    pop() {
        // Remove the top element from the end of stack and return it.
        if (this.stack.length === 0) {
            throw new Error("Stack is empty.")
        }
        let last = this.stack[this.stack.length - 1]
        this.stack.length = this.stack.length - 1;
        return last
    }

    peek() {
        // Return the top element from the stack without removing it.
        if (this.isEmpty()) {
            throw new Error("Stack is empty.")
        }
        return this.stack[this.stack.length - 1];
    }

    size() {
        // Return the size of the stack.
        return this.stack.length
    }

    isEmpty() {
        // Return whether the stack is empty or not.
        return this.stack.length === 0
    }
}

// let stack = new Stack();

// console.log(stack.isEmpty())
// console.log(stack.push(3))
// console.log(stack.peek())
// console.log(stack.pop())
