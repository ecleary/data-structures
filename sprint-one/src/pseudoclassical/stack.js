var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(string) {
  var nextKey = this.size();
  this.storage[nextKey] = string;
  return this.size();
};

Stack.prototype.pop = function() {
  var topKey = this.size() - 1;
  if (topKey > -1) {
    var removedValue = this.storage[topKey];
    delete this.storage[topKey];
    return removedValue;
  }
  return -1;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
