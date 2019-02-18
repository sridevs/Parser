const assert = require('assert');
const calculator = require('../calculator.js');

describe('calculate', function() {
  it('should add the given numbers', function() {
    assert.equal(calculator.parse("3 + 4"), 7);
  });
});
