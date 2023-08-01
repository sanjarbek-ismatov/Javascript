/**
 * Node creator
 * @param data
 * @constructor
 */
function Node(data){
    if(!new.target) return new Node(data)
    this.value = data
    this.next = null
    this.prev = null
}

/**
 * Double Linked List
 * @constructor
 */
function DoublyLinkedList(){
    this.head = null
    this.tail = null
    this.size = 0
    /**
     * Inserts before head
     * @param {any} value
     */
    this.prepend = function(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    /**
     * @returns {boolean} size of linked list
     */
    this.isEmpty = function(){
        return this.size === 0
    }
}

const list = new DoublyLinkedList
list.prepend(10)
list.prepend(20)

console.log(list)
