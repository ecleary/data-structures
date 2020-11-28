var Set = function() {
  var set = Object.create(setMethods);
  return set;
};

var setMethods = {};

// Time complexity: O(1)
setMethods.add = function(value) {
  this[value] = value;
};
// Time complexity: O(1)
setMethods.contains = function(value) {
  return this[value] !== undefined;
};
// Time complexity: O(1)
setMethods.remove = function(value) {
  if (this[value] !== undefined) {
    delete this[value];
  }
};
