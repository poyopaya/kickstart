assert = require("chai").assert
expect = require("chai").expect

describe 'k$.dropdown', ->
  it 'should not apply to elements without uls', ->
    expect(k$.$$('#ddbutton1.with-submenu').length).to.equal(0)

  it 'should apply to button elements', ->
    assert(k$.$('#ddbutton2').classList.contains('with-submenu'), '.with-submenu found')

  describe 'button dropdown', ->
    it 'should show submenu when clicked', ->
      assert(false)

    it 'should hide submenu when clicked again', ->
      assert(false)

    it 'should hide submenu when clicked outside', ->
      assert(false)

  describe 'button with dropdown', ->
    it 'should show submenu when clicked', ->
      assert(false)

    it 'should hide submenu when clicked again', ->
      assert(false)

    it 'should hide submenu when clicked outside', ->
      assert(false)
