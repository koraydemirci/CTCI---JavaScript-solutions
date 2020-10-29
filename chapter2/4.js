const partition = (head, x) => {
  const lessDummy = new Node(-1);
  const greatOrEqualDummy = new Node(-1);
  let lessIter = lessDummy;
  let greatOrEqualIter = greatOrEqualDummy;
  let iter = head;

  while (iter) {
    if (iter.val < x) {
      lessIter.next = iter;
      lessIter = iter;
    } else {
      greatOrEqualIter.next = iter;
      greatOrEqualIter = iter;
    }

    iter = iter.next;
  }

  lessIter.next = greatOrEqualDummy.next;
  greatOrEqualIter.next = null;
  return lessDummy.next;
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
list.push(3);
list.push(5);
list.push(8);
list.push(5);
list.push(10);
list.push(2);
list.push(1);

partition(list.head, 5);
console.log(list);
