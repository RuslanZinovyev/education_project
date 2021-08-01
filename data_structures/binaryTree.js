class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Go to left
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          // if left is exist we reassign value for the current node.
          currentNode = currentNode.left;
        } else {
          // Go to right
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          // if right is exist we reassign value for the current node.
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = tree.root;
    let previousNode = tree.root;

    while (currentNode) {
      if (value < currentNode.value) {
        // go to left and save previous node
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // go to the right and save previous node
        previousNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // if nodes just leafs
        if (currentNode.left === null && currentNode.right === null) {
          if (previousNode.left.value === value) {
            previousNode.left = null;
          } else if (previousNode.right.value === value) {
            previousNode.right = null;
          }
          return this;
          // if value equals to root node
        } else if (currentNode.value === previousNode.value) {
          this.root = null;
          return this;
          // if we need to remove node
        } else {
          if (currentNode.value < previousNode.value) {
            // No right child
            if (currentNode.right === null) {
              previousNode.left = currentNode.left;
              // No left child
            } else if (currentNode.left === null) {
              previousNode.left = currentNode.right;
            } else {
              let temp = currentNode.left;
              previousNode.left = currentNode.right;
              currentNode.right.left = temp;
            }
          } else if (currentNode.value > previousNode.value) {
            // No right child
            if (currentNode.right === null) {
              previousNode.right = currentNode.left;
              // No left child
            } else if (currentNode.left === null) {
              previousNode.right = currentNode.right;
            } else {
              let temp = currentNode.left;
              previousNode.right = currentNode.right;
              currentNode.right.left = temp;
            }
          }
          return this;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();

JSON.stringify(traverse(tree.root));

//       9
//    4    20
//  1  6 15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}
