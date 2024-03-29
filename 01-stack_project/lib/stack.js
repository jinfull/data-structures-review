// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    return ++this.length;
  }

  pop() {
    if (this.length === 0) return null;

    let removedNode = this.top;

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = removedNode.next;
    }

    this.length--;
    return removedNode.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
