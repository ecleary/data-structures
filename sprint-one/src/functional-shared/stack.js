var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var nextKey = this.size();
    this.storage[nextKey] = value;
    return this.size();
  },
  pop: function() {
    var topKey = this.size() - 1;
    if (topKey > -1) {
      var removedValue = this.storage[topKey];
      delete this.storage[topKey];
      return removedValue;
    }
    return -1;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

Stack.instantiationStyle = instantiationStyle();
