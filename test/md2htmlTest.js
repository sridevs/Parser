const assert = require('assert');
const md2html = require('../md2html.js');

describe('should parse an instruction in markdown to html', function(){
  it('should convert a given md heading to html', function(){
    assert.equal(md2html.parse("# Heading"), "<h1>Heading</h1>");
  });
});
