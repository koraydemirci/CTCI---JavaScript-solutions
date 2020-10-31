const reverse = (head) => {
  let newHead = null;

  while (head) {
    let next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
};

const isListPalindrome = (list) => {
  let head = list.head;
  if (!head) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let firstHalfHead = head;
  let secondHalfHead = reverse(slow.next);

  while (firstHalfHead && secondHalfHead) {
    if (firstHalfHead.val !== secondHalfHead.val) {
      return false;
    }

    secondHalfHead = secondHalfHead.next;
    firstHalfHead = firstHalfHead.next;
  }

  return true;
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
list.push(9);
list.push(10);
list.push(9);
list.push(1);

console.log(isListPalindrome(list));
