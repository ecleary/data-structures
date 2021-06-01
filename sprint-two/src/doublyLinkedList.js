var DoublyLinkedList = function() {
  var someInstance = {};
  someInstance.head = null;
  someInstance.tail = null;
  // Time complexity: O(1)
  someInstance.addToTail = function(value) {
    var newNode = Node(value);
    if (someInstance.head === null) {
      someInstance.head = newNode;
    }
    if (someInstance.tail !== null) {
      someInstance.tail.next = newNode;
      newNode.previous = someInstance.tail;
    }
    someInstance.tail = newNode;
    return newNode;
  };
  someInstance.addToHead = function(value) {
    var newNode = Node(value);
    if (someInstance.tail === null) {
      someInstance.tail = newNode;
    }
    if (someInstance.head !== null) {
      someInstance.head.previous = newNode;
      newNode.next = someInstance.head;
    }
    someInstance.head = newNode;
    return newNode;
  };
  // Time complexity: O(1)
  someInstance.removeHead = function() {
    if (someInstance.head !== null) {
      var removedHead = someInstance.head.value;
      if (someInstance.head.next !== null) {
        someInstance.head = someInstance.head.next;
        someInstance.head.previous = null;
      } else {
        someInstance.head = null;
      }
      return removedHead;
    } else {
      return -1;
    }
  };
  someInstance.removeTail = function() {
    if (someInstance.tail !== null) {
      var removedTail = someInstance.tail.value;
      if (someInstance.tail.previous !== null) {
        someInstance.tail = someInstance.tail.previous;
        someInstance.tail.next = null;
      } else {
        someInstance.tail = null;
      }
      return removedTail;
    } else {
      return -1;
    }
  };
  // Time complexity: O(n)
  someInstance.contains = function(value) {
    var nodeToCheck = someInstance.head;
    while (true) {
      if (nodeToCheck.value === value) {
        return true;
      }
      if (nodeToCheck.next !== null) {
        nodeToCheck = nodeToCheck.next;
      } else {
        return false;
      }
    }
  };
  return someInstance;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
