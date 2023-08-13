const Queue = require('../../Queue/index')
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
        if (!root) return false;
        if (root.value === value) return true;
        if (value < root.value) return this.search(value, root.left);
        return this.search(value, root.right);
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
    levelOrder(){
        const queue = new Queue()
        queue.enqueue(this.root)
        while(queue.size()){
            const curr = queue.dequeue()
            console.log(curr.value)
            if(curr.left) queue.enqueue(curr.left)
            if(curr.right) queue.enqueue(curr.right)
        }
    }
    min(root = this.root){
        if(!root) return null
        else if(!root.left) return root.value
        else return this.min(root.left)
    }
    max(root = this.root){
        if(!root) return null
        else if(!root.right) return root.value
        else return this.max(root.right)
    }

    delete(value) {
        if (this.search(value)) {
            this.root = this.deleteNode(this.root, value);
        } else {
            console.log("Value not found in the tree.");
        }
    }

    deleteNode(root, value) {
      if(root === null) return root
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value){
            root.right = this.deleteNode(root.right, value)
        } else{
            if(!root.left && !root.right){
                return null
            } else if(!root.left){
                return root.right
            } else if(!root.right){
                return root.left
            } else{
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
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
console.log(bst.search(3))
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
bst.delete(3)
console.log(bst.search(3))
console.log(bst)
