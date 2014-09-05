assert = require("chai").assert

describe('Modal', ->
  describe('Modal Object', ->
    it('should be namespaced to k$', ->
      assert.typeOf k$.modal, 'object', 'k$.modal is an object'
    )
    it('should not be empty', ->
      assert.equal k$.modal.foo, 'bar', 'k$.modal.foo equals bar'
    )
  )
)
