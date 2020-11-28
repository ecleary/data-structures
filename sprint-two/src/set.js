var Set = function() {
  var set = Object.create(setMethods);
  set.storage = new HashTable();
  return set;
};

var setMethods = {};

// Original implementation

// // Time complexity: O(1)
// setMethods.add = function(value) {
//   this[value] = value;
// };
// // Time complexity: O(1)
// setMethods.contains = function(value) {
//   return this[value] !== undefined;
// };
// // Time complexity: O(1)
// setMethods.remove = function(value) {
//   if (this[value] !== undefined) {
//     delete this[value];
//   }
// };

// Refactored implementation using custom hash table instead of built-in object data structure

// Time complexity: O(1)
setMethods.add = function(value) {
  this.storage.insert(value, value);
};
// Time complexity: O(1)
setMethods.contains = function(value) {
  return this.storage.retrieve(value) !== undefined;
};
// Time complexity: O(1)
setMethods.remove = function(value) {
  this.storage.remove(value);
};
