'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    node.next = null;
    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  insert(index, value) {
    const node = new Node(value);
    const leader = this.getNodeByIndex(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.next = follower;

    this.length++;
    return this;
  }

  getNodeByIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  print() {
    const arr = [];
    let node = this.head;
    while (node != null) {
      arr.push(node.value);
      node = node.next;
    }
    console.log(arr);
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let previous = null;
    let current = this.head;
    let next = null;

    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
    return this;
  }
}

const linkedList = new LinkedList(1);
linkedList.prepend(0);
linkedList.prepend(-1);
linkedList.insert(3, 55);
linkedList.print();
