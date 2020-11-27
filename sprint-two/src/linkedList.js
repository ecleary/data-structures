var LinkedList = function() {
  var someInstance = {};
  someInstance.head = null;
  someInstance.tail = null;
  someInstance.addToTail = function(value) {
    var newNode = Node(value);
    if (someInstance.head === null) {
      someInstance.head = newNode;
    }
    if (someInstance.tail !== null) {
      someInstance.tail.next = newNode;
    }
    someInstance.tail = newNode;
    return newNode;
  };
  someInstance.removeHead = function() {
    if (someInstance.head !== null) {
      var removedHead = someInstance.head.value;
      if (someInstance.head.next !== null) {
        someInstance.head = someInstance.head.next;
      } else {
        someInstance.head = null;
      }
      return removedHead;
    } else {
      return -1;
    }
  };
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
  return node;
};
