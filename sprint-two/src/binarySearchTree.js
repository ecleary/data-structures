var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  _.extend(binarySearchTree, binarySearchTreeMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.parent = null;
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
    this.left.parent = this;
  } else if (inputIsLessThanCallingObject && this.left !== null) {
    this.left.insert(value);
  } else if (!inputIsLessThanCallingObject && this.right === null) {
    this.right = BinarySearchTree(value);
    this.right.parent = this;
  } else if (!inputIsLessThanCallingObject && this.right !== null) {
    this.right.insert(value);
  }
  this.rebalance();
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

binarySearchTreeMethods.rebalance = function() {
  var topNode = this.findTopNode();
  if (topNode.maxDepth() > (topNode.minDepth() * 2)) {
    var listOfValues = [];
    topNode.breadthFirstLog(function(value) {
      listOfValues.push(value);
    });
    listOfValues.sort(function(a, b) {
      return a - b;
    });
    var midIndex = Math.ceil((listOfValues.length - 1) / 2);
    topNode.value = listOfValues[midIndex];
    topNode.left = null;
    topNode.right = null;
    listOfValues.splice(midIndex, 1);
    while (listOfValues.length > 0) {
      midIndex = Math.ceil((listOfValues.length - 1) / 2);
      topNode.insert(listOfValues[midIndex]);
      listOfValues.splice(midIndex, 1);
    }
  }
  return topNode;
};

binarySearchTreeMethods.findTopNode = function() {
  if (this.parent === null) {
    return this;
  } else {
    return this.parent.findTopNode();
  }
};

binarySearchTreeMethods.minDepth = function() {
  var minDepth = 0;
  var bottomNotReached = true;
  var nodesToCheck = Queue();
  nodesToCheck.enqueue([this, 1]);
  while (bottomNotReached) {
    var nodeAndDepth = nodesToCheck.dequeue();
    if (nodeAndDepth[0].left === null && nodeAndDepth[0].right === null) {
      minDepth = nodeAndDepth[1];
      bottomNotReached = false;
    }
    if (nodeAndDepth[0].left !== null) {
      nodesToCheck.enqueue([nodeAndDepth[0].left, nodeAndDepth[1] + 1]);
    }
    if (nodeAndDepth[0].right !== null) {
      nodesToCheck.enqueue([nodeAndDepth[0].right, nodeAndDepth[1] + 1]);
    }
  }
  return minDepth;
};

binarySearchTreeMethods.maxDepth = function() {
  var maxDepth = 0;
  var nodesToCheck = Stack();
  nodesToCheck.push([this, 1]);
  while (nodesToCheck.size() > 0) {
    var nodeAndDepth = nodesToCheck.pop();
    if (nodeAndDepth[0].left === null && nodeAndDepth[0].right === null) {
      if (nodeAndDepth[1] > maxDepth) {
        maxDepth = nodeAndDepth[1];
      }
    }
    if (nodeAndDepth[0].right !== null) {
      nodesToCheck.push([nodeAndDepth[0].right, nodeAndDepth[1] + 1]);
    }
    if (nodeAndDepth[0].left !== null) {
      nodesToCheck.push([nodeAndDepth[0].left, nodeAndDepth[1] + 1]);
    }
  }
  return maxDepth;
};
