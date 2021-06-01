var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = 0;
  this.end = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
  return this.size();
};
Queue.prototype.dequeue = function() {
  if (this.storage[this.start] !== undefined) {
    var dequeuedValue = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return dequeuedValue;
  }
  return -1;
};
Queue.prototype.size = function() {
  return this.end - this.start;
};

Queue.instantiationStyle = instantiationStyle();
