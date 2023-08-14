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
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", 'B')
graph.addEdge("C", "B")
console.log(graph.vertexList)