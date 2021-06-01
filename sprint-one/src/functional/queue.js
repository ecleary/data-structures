var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.end] = value;
    someInstance.end++;
    return someInstance.size();
  };
  someInstance.dequeue = function() {
    if (someInstance.storage[someInstance.start] !== undefined) {
      var dequeuedValue = someInstance.storage[someInstance.start];
      delete someInstance.storage[someInstance.start];
      someInstance.start++;
      return dequeuedValue;
    }
    return -1;
  };
  someInstance.size = function() {
    return someInstance.end - someInstance.start;
  };
  return someInstance;
};

Queue.instantiationStyle = instantiationStyle();
