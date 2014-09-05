var k$ = require('../../public/js/kickstart')

var assert = require("chai").assert

describe('Kickstart main js file', function() {
  describe('Kickstart main function', function() {
    it('should exist as an object', function() {
      assert.typeOf(k$, 'object', 'k$ is an object')
    })
  })
})
