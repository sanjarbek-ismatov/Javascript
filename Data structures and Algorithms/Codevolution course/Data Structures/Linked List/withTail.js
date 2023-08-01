class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    // O(1)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    prepend(value){
        if(this.isEmpty()){
            this.append(value)
        } else{
            const node = new Node(value)
            node.next = this.head
            this.head = node
            this.size++
        }
    }
    isEmpty(){
        return this.getSize() === 0
    }
    getSize(){
        return this.size
    }
    insertAt(value, index){
        if(index < 0 || index > this.getSize()) return
        if(this.isEmpty() || index === this.getSize()) this.append(value)
        else if(index === 0) this.prepend(value)
        else{
            const node = new Node(value)
            let prev = this.head
            let i = 0
            while(prev && i < index - 1){
                prev = prev.next
                i++
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    pop(){
        if(this.isEmpty()) return null
        if(this.getSize() === 1) {
            this.head = null
            this.tail = null
        } else {
            let curr = this.head
            while (curr.next !== this.tail) {
                curr = curr.next
            }
            const removed = this.tail
            curr.next = null
            this.tail = curr
            return removed.value
        }
        this.size--
        return null
    }
    shift(){
        if(this.isEmpty()) return null
        if(this.getSize() === 1){
            this.head = null
            this.tail = null
        }else {
            const head = this.head
            this.head = this.head.next
            return head.value
        }
        this.size--
    }
    removeAtIndex(index){
        if(this.isEmpty() || index < 0 || index > this.getSize() - 1) return null
        if(this.getSize() === 1){
            this.head = null
            this.tail = null
        } else{
            let prev = this.head
            let i = 0
            while(prev && i < index){
                prev = prev.next
                i++
            }
            const removed = prev.next.value
            prev.next = prev.next.next
            return removed
        }
        this.size--
        return null
    }
    removeFromValue(value){
        if(this.isEmpty()) return null
        let prev = this.head
        if(prev.value === value){
            this.shift()
        } else {
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            const removed = prev.next.value
            prev.next = prev.next.next
            return removed
        }
    }
    search(value){
        if(this.isEmpty()) return -1
        let curr = this.head
        let i = 0;
        while(curr){
            if(curr.value === value) return i
            curr = curr.next
            i++
        }
        return -1

    }
    display(){
        let displayValue = "{"
        let curr = this.head
        if(!this.isEmpty()) {
            while (curr.next) {
                displayValue += curr.value + ", "
                curr = curr.next
            }
            displayValue += curr.value
        }
        displayValue += "}"
        console.log(displayValue)
    }
    reverse(){
        if(this.isEmpty()) return
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
}
const list = new LinkedList()

list.prepend(20)
list.prepend(10)
list.append(30)
list.append(40)
list.insertAt(15, 4)
console.log(list.search(15))
// list.removeFromValue(10)
// list.removeAtIndex(1)
// list.pop()
// list.pop()
list.reverse()
list.display()
