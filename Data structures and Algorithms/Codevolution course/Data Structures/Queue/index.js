class Queue{
    constructor() {
        this.items = []
    }
    enqueue(item){
        this.items.push(item)
    }
    dequeue(){
        return this.items.shift()
    }
    peek(){
        if(!this.isEmpty()) return this.items[0]
        return null
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.print()
queue.dequeue()
queue.print()

