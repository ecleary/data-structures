describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should store numbers', function() {
    set.add(25);
    set.add(196);
    set.add(25);
    expect(set.contains(25)).to.equal(true);
    expect(set.contains(196)).to.equal(true);
    expect(set.contains(52)).to.equal(false);
  });

  it('should store arrays and objects', function() {
    set.add([25, 196]);
    set.add({amount: 9625, rate: 'a lot'});
    expect(set.contains([25, 196])).to.equal(true);
    expect(set.contains({amount: 9625, rate: 'a lot'})).to.equal(true);
    expect(set.contains([25, '196'])).to.equal(false);
  });

});
