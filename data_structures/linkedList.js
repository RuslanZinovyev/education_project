'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  // constructor
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // append method O(1)
  append(value) {
    const node = new Node(value);
    node.next = null;
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  // prepend method O(1)
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    node.previous = null;
    this.head.previous = node;
    this.head = node;
    this.length++;

    return this;
  }

  // print LinkedList
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  // insert method O(n)
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const node = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.previous = leader;
    node.next = follower;
    follower.previous = node;

    this.length++;
    return this;
  }

  // need to change to address the doubly LinkedList
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  // just traverse through the list to find node by index
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(11);
