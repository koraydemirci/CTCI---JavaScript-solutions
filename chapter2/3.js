const deleteMiddleNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new LinkedList();
list.push(1);
list.push(12);
list.push(1);
list.push(6);
list.push(12);
list.push(4);
list.push(6);

deleteMiddleNode(list.head.next);
console.log(list);
