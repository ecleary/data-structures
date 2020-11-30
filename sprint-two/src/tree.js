var Tree = function(value) {
  var tree = {};
  tree.value = value;
  tree.parent = null;
  tree.children = [];
  _.extend(tree, treeMethods);
  return tree;
};

var treeMethods = {};

// Time complexity: O(1)
treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
  return newTree;
};
treeMethods.removeFromParent = function() {
  var childValues = this.parent.children.map(function(child) {
    return child.value;
  });
  var childNumber = childValues.indexOf(this.value);
  this.parent.children.splice(childNumber, 1);
  this.parent = null;
};
// Time complexity: O(n)
treeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (this.children.length > 0) {
    return this.children.some(function(child) {
      return child.contains(value);
    });
  } else {
    return false;
  }
};
treeMethods.traverse = function(callback) {
  callback(this.value);
  if (this.children.length > 0) {
    this.children.forEach(function(child) {
      child.traverse(callback);
    });
  }
};
