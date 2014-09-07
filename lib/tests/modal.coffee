assert = require("chai").assert
expect = require("chai").expect

event = document.createEvent 'MouseEvents'
event.initMouseEvent 'click', true, true, window, 1, 0, 0

describe 'Modal', ->
  describe 'JS function', ->
    it 'should be namespaced to k$', ->
      assert.typeOf k$.modal, 'function', 'k$.modal is a function'
    it 'should contain basic selectors', ->
      assert.typeOf k$.$, 'function', 'k$.$ is a function'
    it 'should contain basic selectors', ->
      assert.typeOf k$.$$, 'function', 'k$.$$ is a function'
    it 'should return a DOM object', ->
      assert.typeOf k$.modal('#test-modal'), 'object', 'Modal returns a DOM object'

  showModal = ->
    $modal = k$.modal '#test-modal'
    $modal.style.display = 'block'
    $modal

  showSecondModal = ->
    $modal = k$.modal '#test-modal-2'
    $modal.style.display = 'block'
    $modal

  describe 'behavior', ->
    it 'should close when clicking on body', ->
      $modal = showModal()
      document.body.dispatchEvent event
      expect($modal.style.display).to.equal('none')

    # Seems a little silly, but since we're using raw event listeners,
    # selectors have a way of overriding their predecessors.
    it 'should close all modals on body click', ->
      $modal = showModal()
      $modal2 = showSecondModal()
      document.body.dispatchEvent event
      expect($modal.style.display).to.equal('none')
      expect($modal2.style.display).to.equal('none')
