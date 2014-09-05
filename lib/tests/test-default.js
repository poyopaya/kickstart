var k$ = require('../../public/js/kickstart')

var assert = require("chai").assert

describe('Foobar', function() {
  describe('#sayHello()', function() {
    it('should return some text', function() {
      var foobar = {
        sayHello: function() {
          return 'Hello World!';
        }
      };

      assert(foobar.sayHello() === 'funky chicken');
    })
  })
})
