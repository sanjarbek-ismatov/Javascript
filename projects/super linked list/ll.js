function Node(data) {
  if (!new.target) return new Node(data);
  this.value = data;
  this.prev = null;
  this.next = null;
}
function LinkedList() {
  if (!new.target) {
  }
  this.head = null;
  this.tail = null;
  this.isEmpty = function () {
    return this.head === null;
  };
  this.append = function (data) {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(data);
  };
  this.prepend = function (data) {
    const node = new Node(data);
    const currentHead = this.head;
    node.next = currentHead;
    this.head = node;
  };
}
