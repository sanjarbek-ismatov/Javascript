// const Queue = require('../../Queue/index')
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        } else{
            this.insertNode(this.root, node)
        }
    }

    /**
     * @private
     */
    insertNode(root, node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(root.right === null){
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(value, root = this.root){
        if(!root) return false
        else if(root.value === value) return true
        else if(value < root.value) return this.search(value, root.left)
        else if(value > root.value) return this.search(value, root.right)
    }
    preOrder(root = this.root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root = this.root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    // levelOrder(){
    //     const queue = new Queue()
    //     queue.enqueue(this.root)
    //     while(queue.size()){
    //         const curr = queue.dequeue()
    //         console.log(curr.value)
    //         if(curr.left) queue.enqueue(curr.left)
    //         if(curr.right) queue.enqueue(curr.right)
    //     }
    // }
    min(root = this.root){
        if(!root.left) return root.value
        else return this.min(root.left)
    }
    max(root = this.root){
        if(!root.right) return root.value
        else return this.max(root.right)
    }

    delete(value) {
        console.log(`Deleting node with value ${value}`);
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            console.log("Node not found, returning null");
            return root;
        }

        console.log(`Checking node with value ${root.value}`);

        if (value < root.value) {
            console.log(`Going left from node with value ${root.value}`);
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            console.log(`Going right from node with value ${root.value}`);
            root.right = this.deleteNode(root.right, value);
        } else {
            console.log(`Node with value ${value} found`);

            if (!root.left && !root.right) {
                console.log("Node has no children, returning null");
                return null;
            }

            if (!root.left) {
                console.log("Node has no left child, returning right child");
                return root.right;
            } else if (!root.right) {
                console.log("Node has no right child, returning left child");
                return root.left;
            }

            console.log(`Node with value ${value} has both left and right children`);
            root.value = this.min(root.right);
            console.log(`Replacing node value with minimum value from right subtree: ${root.value}`);
            root.right = this.deleteNode(root.right, root.value);
        }

        console.log(`Returning modified node with value ${root.value}`);
        return root;
    }
}
const bst = new BinarySearchTree()
bst.insert(8)
bst.insert(3)
bst.insert(10)
bst.insert(1)
bst.insert(6)
bst.insert(4)
bst.insert(7)
bst.insert(14)
bst.insert(13)
// console.log(bst.search(3))
// bst.preOrder()
// console.log('----')
// bst.inOrder()
// console.log('----')
// bst.postOrder()
// console.log('----')
// bst.levelOrder()
// console.log('Min: ' + bst.min())
// console.log('Max: ' + bst.max())
console.log(bst)
bst.delete(-3)
