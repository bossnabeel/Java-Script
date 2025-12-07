import { Stack } from "./06_stack.js";
import { Queue} from './07_queue.js'
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(root, value) {
        if (root === null) {

            return new Node(value);
        }
        if (value < root.value) {
            root.left = this.insert(root.left, value)
        }
        if (value > root.value) {
            root.right = this.insert(root.right, value);
        }
        return root;
    }

    DepthFirstSearch(root, target) {
        let check = new Stack();
        if (root !== null) {
            check.push(root);
        }
        while (!check.isEmpty()) {
            const node = check.pop();
            if (target === node.value) {
                return true;
            }
            if (node.left !== null) {
                check.push(node.left)
            }
            if (node.right !== null) {
                check.push(node.right);
            }
        }
        return false;
    }

    BreadthFirstSearch(root, target) {
        let check = new Queue();
        if (root !== null) {
            check.enqueue(root);
        }
        while (!check.isEmpty()) {
            const node = check.dequeue();
            if (target === node.value) {
                return true;
            }
            if (node.left !== null) {
                check.enqueue(node.left)
            }
            if (node.right !== null) {
                check.enqueue(node.right);
            }
        }
        return false;
    }


inOrder(root) {
    if (root === null) {
        return;
    }
    this.inOrder(root.left)
    console.log(root.value);
    this.inOrder(root.right);
}
}
let tree = new BinaryTree()
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 5);
tree.root = tree.insert(tree.root, 15);
tree.root = tree.insert(tree.root, 3);

console.log(tree.DepthFirstSearch(tree.root, 5))

tree.inOrder(tree.root);

console.log(tree.BreadthFirstSearch(tree.root, 3))