var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
  return this.size();
};
queueMethods.dequeue = function() {
  if (this.storage[this.start] !== undefined) {
    var dequeuedValue = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return dequeuedValue;
  }
  return -1;
};
queueMethods.size = function() {
  return this.end - this.start;
};
