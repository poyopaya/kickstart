assert = require("chai").assert
expect = require("chai").expect

describe 'Modal', ->
  describe 'Modal Object', ->
    it 'should be namespaced to k$', ->
      assert.typeOf k$.modal, 'function', 'k$.modal is a function'
    it 'should contain basic selectors', ->
      assert.typeOf k$.$, 'function', 'k$.$ is a function'
    it 'should contain basic selectors', ->
      assert.typeOf k$.$$, 'function', 'k$.$$ is a function'
    it 'should return a DOM object', ->
      assert.typeOf k$.modal('#test-modal'), 'object', 'Modal returns a DOM object'

  describe 'Modal Behavior', ->
    it 'should close when clicking on body', ->
      $modal = k$.modal '#test-modal'
      $modal.style.display = 'block'
      event = document.createEvent 'MouseEvents'
      event.initMouseEvent 'click', true, true, window, 1, 0, 0
      document.body.dispatchEvent event
      expect($modal.style.display).to.equal('none')
