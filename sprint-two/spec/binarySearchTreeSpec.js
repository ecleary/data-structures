describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", "depthFirstLogRecursive", "depthFirstLog", and "breadthFirstLog"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLogRecursive).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLogRecursive"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLogRecursive(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 1, 3, 6, 8, 4, 9]);
  });

  it('should rebalance as soon as the max depth is more than twice the minimum depth"', function() {
    binarySearchTree.insert(4);
    expect(binarySearchTree.value).to.equal(5);
    expect(binarySearchTree.left.value).to.equal(4);
    binarySearchTree.insert(10);
    expect(binarySearchTree.value).to.equal(5);
    expect(binarySearchTree.right.value).to.equal(10);
    binarySearchTree.insert(8);
    expect(binarySearchTree.value).to.equal(5);
    expect(binarySearchTree.right.left.value).to.equal(8);
    binarySearchTree.insert(7);
    expect(binarySearchTree.value).to.equal(5);
    expect(binarySearchTree.right.left.left.value).to.equal(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.value).to.equal(7);
    expect(binarySearchTree.left.value).to.equal(6);
    expect(binarySearchTree.left.left.value).to.equal(5);
    expect(binarySearchTree.left.left.left.value).to.equal(4);
    expect(binarySearchTree.right.value).to.equal(8);
    expect(binarySearchTree.right.right.value).to.equal(10);
  });
});
