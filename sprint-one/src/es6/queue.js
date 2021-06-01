class Queue {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }
  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
    return this.size();
  }
  dequeue() {
    if (this.storage[this.start] !== undefined) {
      var dequeuedValue = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return dequeuedValue;
    }
    return -1;
  }
  size() {
    return this.end - this.start;
  }
}

Queue.instantiationStyle = instantiationStyle();
