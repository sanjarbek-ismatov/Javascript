class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(data){
        const node = new Node(data)
        if(this.isEmpty()){
            this.head = node
        } else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(data){
        const node = new Node(data)
        if(this.isEmpty()) {
            this.head = node
        }
        else{
            let prev = this.head
            while (prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    [Symbol.iterator](){
        return function*(){
            let current = this.head
            if(!this.isEmpty()) {
                while (current) {
                    yield current
                    current = current.next
                }
            }
        }.bind(this)
    }
    display(){
        let displayValue = "{ "
        let current = this.head
        if(!this.isEmpty()) {
            while (current.next) {
                displayValue += current.data + ", "
                current = current.next
            }
            displayValue += current.data + " "
        }
        displayValue += "}"
        console.log(displayValue)
    }
}
const list = new LinkedList()
console.log(list)
list.append(10)
list.append(20)
list.display()
