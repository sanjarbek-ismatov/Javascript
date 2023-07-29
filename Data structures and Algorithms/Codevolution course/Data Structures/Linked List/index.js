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
    insertAt(data, index){
        if(index < 0 || index > this.size) return
        if(index === 0) this.prepend(data)
        else{
            const node = new Node(data)
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++

    }
    remove(index){
        if(index < 0 || index > this.size) return
        let removed;
        if(index === 0) {
            removed = this.head
            this.head = removed.next
        }else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removed = prev.next
            prev.next = removed.next
        }
        this.size--
        return removed
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
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.insertAt(50, 1)
list.remove(0)
console.log(list.size)
list.display()
