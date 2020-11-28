var Graph = function() {};

// Time complexity: O(1)
Graph.prototype.addNode = function(value) {
  if (this[value] === undefined) {
    this[value] = [];
  }
};
// Time complexity: O(1)
Graph.prototype.contains = function(value) {
  return this[value] !== undefined ? true : false;
};
// Time complexity: O(n) due to lookup-by-value in .removeEdge() call
Graph.prototype.removeNode = function(targetNode) {
  if (this[targetNode] !== undefined) {
    var nodesNeedingEdgeRemoval = this[targetNode];
    nodesNeedingEdgeRemoval.forEach.call(this, function(nodeNeedingEdgeRemoval) {
      this.removeEdge(nodeNeedingEdgeRemoval, targetNode);
    });
    delete this[targetNode];
  }
};
// Time complexity: O(n) due to lookup-by-value
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return -1;
  }
  if (this[fromNode].indexOf(toNode) === -1) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};
// Time complexity: O(n) due to lookup-by-value
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return false;
  }
  return this[fromNode].indexOf(toNode) > -1;
};
// Time complexity: O(n) due to lookup-by-value
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return -1;
  }
  if (this[fromNode].indexOf(toNode) > -1) {
    this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
    this[toNode].splice(this[toNode].indexOf(fromNode), 1);
  }
};
// Time complexity: O(n)
Graph.prototype.forEachNode = function(callback) {
  var nodes = Object.keys(this);
  nodes.forEach(callback);
};
