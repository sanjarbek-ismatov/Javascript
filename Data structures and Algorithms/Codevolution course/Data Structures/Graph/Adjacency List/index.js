class Graph{
    constructor() {
        this.vertexList = {}
    }
    addVertex(vertex){
        if(!this.vertexList[vertex]) this.vertexList[vertex] = new Set()
    }
    addEdge(vertex1, vertex2){
        if(!this.vertexList[vertex1]) this.addVertex(vertex1)
        if(!this.vertexList[vertex2]) this.addVertex(vertex2)
        this.vertexList[vertex1].add(vertex2)
        this.vertexList[vertex2].add(vertex1)
    }
    display(){
        for(let key in this.vertexList){
            console.log(key + " -> " + [...this.vertexList[key]])
        }
    }
    hasEdge(vertex1, vertex2){
        return this.vertexList[vertex1].has(vertex2) && this.vertexList[vertex2].has(vertex1)
    }
    removeEdge(vertex1, vertex2){
        this.vertexList[vertex1].delete(vertex2)
        this.vertexList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        for(let key of this.vertexList[vertex]){
            this.removeEdge(vertex, key)
        }
        delete this.vertexList[vertex]
    }
}


const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", 'B')
graph.addEdge("C", "B")
// graph.removeEdge("B", "C")
graph.removeVertex("A")
graph.display()
console.log(graph.hasEdge("B", "C"))