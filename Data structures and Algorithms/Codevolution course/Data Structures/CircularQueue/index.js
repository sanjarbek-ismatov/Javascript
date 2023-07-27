class CircularQueue{
    constructor(capacity) {
        this.items = []
        this.capacity = capacity
        this.length = 0
        this.front = -1
        this.rear = -1
    }
    isEmpty(){
        return this.length === 0
    }
    isFull(){
        return this.length === this.capacity
    }
    enqueue(item){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = item
            this.length++
            if(this.front === -1) this.front = this.rear
        } else console.log("Queue is full")
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.length--
        if(this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }else this.front = (this.front + 1) % this.capacity
        return item
    }
    peek(){
        if(!this.isEmpty())
        return this.items[this.front]
        return null
    }
    print(){
        let i
        let string = ""
        for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity){
            string += this.items[i] + " "
        }
        string += this.items[i]
        console.log(string)
    }
}

const queue =  new CircularQueue(3)
console.log(queue.isEmpty(), queue.isFull())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
queue.dequeue()
queue.print()
queue.enqueue(4)
queue.print()
console.log(queue.isEmpty(), queue.isFull())
