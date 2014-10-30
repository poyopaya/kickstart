assert = require("chai").assert

k$.testClick = (el) ->
  event = document.createEvent 'MouseEvents'
  event.initMouseEvent 'click', true, true, window, 1, 0, 0
  el.dispatchEvent event

describe 'Kickstart main function', ->
  it 'should exist as an object', ->
    assert.typeOf k$, 'object', 'k$ is an object'
  it 'should contain basic selectors', ->
    assert.typeOf k$.$, 'function', 'k$.$ is a function'
  it 'should contain basic selectors', ->
    assert.typeOf k$.$$, 'function', 'k$.$$ is a function'

describe 'Event listeners', ->
  it 'on body should not be more than 1.', ->
    expect(getEventListeners(document.body).click.length).to.be.below(2)
