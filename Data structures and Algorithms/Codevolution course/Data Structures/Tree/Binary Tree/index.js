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
}
const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(30)
bst.insert(5)
bst.insert(3)
console.log(bst.search(3))
bst.preOrder()
console.log('----')
bst.inOrder()
console.log('----')
bst.postOrder()
console.log('----')
bst.levelOrder()