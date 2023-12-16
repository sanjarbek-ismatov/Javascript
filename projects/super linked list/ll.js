function Node(data) {
  if (!new.target) return new Node(data);
  this.value = data;
  this.prev = null;
  this.next = null;
}
function LinkedList(array) {
  if (!new.target) {
    const ll = new LinkedList();
    return ll.fromArraytoLList(array);
  }
  this.head = null;
  this.tail = null;
  this.isEmpty = function () {
    return this.head === null;
  };
  this.append = function (data) {
    if (this.isEmpty()) this.prepend(data);
    else {
      const node = new Node(data);
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };
  this.prepend = function (data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  };
  this.toViewAsArray = function () {
    return Array.from(this[Symbol.iterator]());
  };
  this.fromArraytoLList = function (array) {
    const tempList = new LinkedList();
    for (let item of array) {
      tempList.append(item);
    }
    return tempList;
  };
  this[Symbol.iterator] = function* () {
    let curr = this.head;
    while (curr) {
      yield curr.value;
      curr = curr.next;
    }
  };
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.prepend(0);
// for (let i of ll) {
//   console.log(i);
// }
const array = ll.toViewAsArray();
const arrayAsLList = LinkedList(array);
console.log(arrayAsLList.toViewAsArray());
