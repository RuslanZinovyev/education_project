/**
 * Create simple Queue
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  // O(1) constant time operation
  enqueue(value) {
    const node = new Node(value);
    if (this.length != 0) {
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  // O(1) constant time operation
  dequeue() {
    if (this.length !== 0) {
      let reference = this.first.next;
      this.first = reference;
      this.length--;
      return this;
    } else {
      return this;
    }
  }

  isEmpty() {
    if (this.length !== 0) {
      return false;
    }
    return true;
  }
}

/*
Joy
Matt
Pavel
Samir
*/
const queue = new Queue();
queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Pavel');
queue.enqueue('Samir');
queue.dequeue();
queue.isEmpty();
