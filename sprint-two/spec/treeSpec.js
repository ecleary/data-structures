describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
    expect(tree.children[0].parent).to.equal(tree);
    tree.children[0].addChild(7);
    expect(tree.children[0].children[0].value).to.equal(7);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should remove a tree from its parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].children[0].addChild(9);
    tree.children[1].children[0].addChild(10);
    expect(tree.contains(9)).to.equal(true);
    var targetTree1 = tree.children[0];
    expect(targetTree1.parent).to.equal(tree);
    targetTree1.removeFromParent();
    expect(targetTree1.parent).to.equal(null);
    expect(tree.contains(9)).to.equal(false);
    expect(tree.contains(10)).to.equal(true);
    var targetTree2 = tree.children[0].children[0].children[0];
    targetTree2.removeFromParent();
    expect(targetTree2.parent).to.equal(null);
    expect(tree.children[0].children[0].children.length).to.equal(0);
    expect(tree.contains(10)).to.equal(false);
  });

});
