/*
Justification: Measure performance of Stack and Queue classes by instantiating and using a large number of instances

I: Undetermined
O: High volume of stack and queue instances and usage of those instances
C:
  - First confirm proof of concept with single stack and/or queue instantiation style
  - After confirming proof of concept, proceed with testing all 5 instantiation styles, one at a time
E: Undetermined

Explanation: Use high volume of instances to measure differences in performance between each instantiation style

Visualization: Whiteboard

Approximation:

Create new stack named "outerStack"
Iterate n times
  Create new stack named "innerStack"
  Iterate x times
    Add current iteration number to innerStack
  Add innerStack to outerStack
Return outerStack

Verification:

Implementation:

*/

var generateStacks = function(n, x) {
  var outerStack = Stack.instantiationStyle === 'pseudoclassical' || Stack.instantiationStyle === 'es6' ? new Stack() : Stack();
  for (var i = 0; i < n; i++) {
    var innerStack = Stack.instantiationStyle === 'pseudoclassical' || Stack.instantiationStyle === 'es6' ? new Stack() : Stack();
    for (var j = 0; j < x; j++) {
      innerStack.push(j);
    }
    outerStack.push(innerStack);
  }
  return outerStack;
};

var generateQueues = function(n, x) {
  var outerQueue = Queue.instantiationStyle === 'pseudoclassical' || Queue.instantiationStyle === 'es6' ? new Queue() : Queue();
  for (var i = 0; i < n; i++) {
    var innerQueue = Queue.instantiationStyle === 'pseudoclassical' || Queue.instantiationStyle === 'es6' ? new Queue() : Queue();
    for (var j = 0; j < x; j++) {
      innerQueue.enqueue(j);
    }
    outerQueue.enqueue(innerQueue);
  }
  return outerQueue;
};

var bigStacks = generateStacks(1200, 1200);
var bigQueues = generateQueues(1200, 1200);
