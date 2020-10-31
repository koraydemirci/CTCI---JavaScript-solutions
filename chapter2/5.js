const addTwoLists1 = (list1, list2) => {
  let node1 = list1.head;
  let node2 = list2.head;

  let carry = 0;
  const newList = new LinkedList();

  while (node1 || node2) {
    let sum = carry;

    if (node1) {
      sum += node1.val;
      node1 = node1.next;
    }

    if (node2) {
      sum += node2.val;
      node2 = node2.next;
    }

    carry = Math.floor(sum / 10);
    let nodeValue = sum % 10;

    newList.push(nodeValue);
  }

  if (carry) {
    newList.push(carry);
  }

  return newList;
};

const addTwoLists2 = (list1, list2) => {
  const list1Length = list1.length;
  const list2Length = list2.length;
  let diff = list1Length - list2Length;
  if (diff > 0) {
    while (diff > 0) {
      list2.unshift(0);
      diff--;
    }
  } else {
    while (diff < 0) {
      list1.unshift(0);
      diff++;
    }
  }

  let node1 = list1.head;
  let node2 = list2.head;

  const newList = new LinkedList();
  let sum = 0;

  while (node1 && node2) {
    sum = 10 * sum + node1.val + node2.val;
    node1 = node1.next;
    node2 = node2.next;
  }

  for (let num of sum.toString()) {
    newList.push(parseInt(num));
  }
  console.log("newList", newList);

  return newList;
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

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const list1 = new LinkedList();
list1.push(1);
list1.push(4);
list1.push(9);

const list2 = new LinkedList();
list2.push(1);
list2.push(0);
list2.push(9);

addTwoLists1(list1, list2);
addTwoLists2(list1, list2);
