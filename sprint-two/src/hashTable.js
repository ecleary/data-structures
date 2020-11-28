var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);
  var existingSlot = -1;
  for (var slot = 0; slot < bucket.length; slot++) {
    if (bucket[slot][0] === key) {
      existingSlot = slot;
      break;
    }
  }
  if (existingSlot > -1) {
    bucket[existingSlot] = [key, value];
  } else {
    bucket.push([key, value]);
  }
};
HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  var bucket = this._storage.get(index);
  for (var slot = 0; slot < bucket.length; slot++) {
    if (bucket[slot][0] === key) {
      return bucket[slot][1];
    }
  }
  return undefined;
};
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined) {
    return -1;
  }
  var bucket = this._storage.get(index);
  var existingSlot = -1;
  for (var slot = 0; slot < bucket.length; slot++) {
    if (bucket[slot][0] === key) {
      existingSlot = slot;
      break;
    }
  }
  if (existingSlot > -1) {
    bucket.splice(existingSlot, 1);
  } else {
    return -1;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * HashTable.prototype.insert: O(1)
 * HashTable.prototype.retrieve: O(1)
 * HashTable.prototype.remove: O(1)
 */


