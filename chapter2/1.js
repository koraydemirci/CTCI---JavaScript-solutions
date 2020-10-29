const removeDuplicatesSet = (list) => {
  const hash = {};
  let current = list.head;
  let previous;

  while (current) {
    if (hash[current.val]) {
      previous.next = current.next;
    } else {
      hash[current.val] = true;
      previous = current;
    }
    current = current.next;
  }

  return list; // return list, head will never change
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

console.log("list", removeDuplicatesSet(list));
