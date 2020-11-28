var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  _.extend(binarySearchTree, binarySearchTreeMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var binarySearchTreeMethods = {};

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
binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
