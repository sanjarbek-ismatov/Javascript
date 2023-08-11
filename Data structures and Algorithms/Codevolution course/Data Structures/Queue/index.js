class Queue{
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(item){
        this.items[this.rear] = item
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    peek(){
        if(!this.isEmpty()) return this.items[this.front]
        return null
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items)
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())

module.exports = Queue