var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insertWithoutResizing = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);
  var existingTuple = -1;
  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === key) {
      existingTuple = tuple;
      break;
    }
  }
  if (existingTuple > -1) {
    bucket[existingTuple][1] = value;
  } else {
    bucket.push([key, value]);
  }
};
HashTable.prototype.insert = function(key, value) {
  this.insertWithoutResizing(key, value);
  this.adjustTableSizeByUsage();
};
HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  var bucket = this._storage.get(index);
  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === key) {
      return bucket[tuple][1];
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
  var existingTuple = -1;
  for (var tuple = 0; tuple < bucket.length; tuple++) {
    if (bucket[tuple][0] === key) {
      existingTuple = tuple;
      break;
    }
  }
  if (existingTuple > -1) {
    bucket.splice(existingTuple, 1);
  } else {
    return -1;
  }
  this.adjustTableSizeByUsage();
};
HashTable.prototype.adjustTableSizeByUsage = function() {
  var tableSize = this._limit;
  var tableUsage = 0;
  this._storage.each(function(bucket) {
    if (bucket && bucket.length > 0) {
      tableUsage++;
    }
  });
  var percentUsed = tableUsage / tableSize;
  if (percentUsed >= 0.75) {
    this._limit *= 2;
    this.rehashTable(this._limit);
  } else if (percentUsed < 0.25) {
    this._limit /= 2;
    this.rehashTable(this._limit);
  }
};
HashTable.prototype.rehashTable = function(limit) {
  var newLimitedArray = LimitedArray(limit);
  var oldLimitedArray = this._storage;
  this._storage = newLimitedArray;
  var staticThis = this;
  oldLimitedArray.each(function(bucket, bucketNumber, bucketCollection) {
    if (bucket) {
      bucket.forEach(function(tuple, tupleNumber, tupleCollection) {
        staticThis.insertWithoutResizing(tuple[0], tuple[1]);
      });
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * HashTable.prototype.insert: O(1)
 * HashTable.prototype.retrieve: O(1)
 * HashTable.prototype.remove: O(1)
 */
