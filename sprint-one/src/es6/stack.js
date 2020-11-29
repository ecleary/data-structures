class Stack {
  // Instantiated and returned object and properties
  constructor() {
    this.storage = {};
  }
  // Methods on prototype chain
  push(string) {
    var nextKey = this.size();
    this.storage[nextKey] = string;
    return this.size();
  }
  pop() {
    var topKey = this.size() - 1;
    if (topKey > -1) {
      var removedValue = this.storage[topKey];
      delete this.storage[topKey];
      return removedValue;
    }
    return -1;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}

Stack.instantiationStyle = instantiationStyle();
