var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.push = function(value) {
    var nextKey = someInstance.size();
    someInstance.storage[nextKey] = value;
    return someInstance.size();
  };
  someInstance.pop = function() {
    var topKey = someInstance.size() - 1;
    if (topKey > -1) {
      var removedValue = someInstance.storage[topKey];
      delete someInstance.storage[topKey];
      return removedValue;
    }
    return -1;
  };
  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };
  return someInstance;
};
