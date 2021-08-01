/**
 * Create simple Stack
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const pointer = this.top;
      this.top = node;
      this.top.next = pointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return this;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    } else {
      const pointer = this.top.next;
      this.top = pointer;
      this.length--;
    }
    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
stack.push('Discord');
stack.push('Netflix');
stack.push('Microsoft');
stack.pop();
stack.pop();
stack.pop();
