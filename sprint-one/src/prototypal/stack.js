var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var nextKey = this.size();
  this.storage[nextKey] = value;
  return this.size();
};
stackMethods.pop = function() {
  var topKey = this.size() - 1;
  if (topKey > -1) {
    var removedValue = this.storage[topKey];
    delete this.storage[topKey];
    return removedValue;
  }
  return -1;
};
stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
