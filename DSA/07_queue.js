export class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(element) {
        // TODO
        this.queue.push(element)
    }

    dequeue() {
        // TODO
        if (this.isEmpty()) {
            throw new Error("Queue is empty.")
        }

        return this.queue.shift()
    }

    peek() {
        // TODO
        if (this.isEmpty()) {
            throw new Error("Queue is empty.")
        }

        return this.queue[0];
    }

    size() {
        // TODO
        return this.queue.length

    }

    isEmpty() {
        // TODO

        return this.queue.length === 0;
    }
}