var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  _.extend(binarySearchTree, binarySearchTreeMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var binarySearchTreeMethods = {};

// Time complexity: O(log n)
binarySearchTreeMethods.insert = function(value) {
  if (value === this.value) {
    return -1;
  }
  var inputIsLessThanCallingObject = value < this.value;
  if (inputIsLessThanCallingObject && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (inputIsLessThanCallingObject && this.left !== null) {
    this.left.insert(value);
  } else if (!inputIsLessThanCallingObject && this.right === null) {
    this.right = BinarySearchTree(value);
  } else if (!inputIsLessThanCallingObject && this.right !== null) {
    this.right.insert(value);
  }
};
// Time complexity: O(log n)
binarySearchTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};
// Time complexity: O(n)
binarySearchTreeMethods.depthFirstLogRecursive = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
binarySearchTreeMethods.depthFirstLog = function(callback) {
  var toBeProcessed = Stack();
  toBeProcessed.push(this);
  while (toBeProcessed.size() > 0) {
    var workInProgress = toBeProcessed.pop();
    callback(workInProgress.value);
    if (workInProgress.right !== null) {
      toBeProcessed.push(workInProgress.right);
    }
    if (workInProgress.left !== null) {
      toBeProcessed.push(workInProgress.left);
    }
  }
};
binarySearchTreeMethods.breadthFirstLog = function(callback) {
  var toBeProcessed = Queue();
  toBeProcessed.enqueue(this);
  while (toBeProcessed.size() > 0) {
    var workInProgress = toBeProcessed.dequeue();
    callback(workInProgress.value);
    if (workInProgress.left !== null) {
      toBeProcessed.enqueue(workInProgress.left);
    }
    if (workInProgress.right !== null) {
      toBeProcessed.enqueue(workInProgress.right);
    }
  }
};
