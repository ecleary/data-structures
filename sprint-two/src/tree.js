var Tree = function(value) {
  var tree = {};
  tree.value = value;
  tree.children = [];
  _.extend(tree, treeMethods);
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  return newTree;
};
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
