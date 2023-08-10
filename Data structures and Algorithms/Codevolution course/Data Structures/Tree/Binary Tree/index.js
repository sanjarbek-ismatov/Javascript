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
}
const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(30)
bst.insert(5)
bst.insert(3)
console.log(bst.search(3))
bst.preOrder()