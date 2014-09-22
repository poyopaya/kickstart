assert = require("chai").assert
expect = require("chai").expect

describe 'k$.dropdown', ->
  it 'should not apply to elements without uls', ->
    expect(k$.$$('#ddbutton1.with-submenu').length).to.equal(0)

  it 'should apply to button elements', ->
    assert(k$.$('#ddbutton2').classList.contains('with-submenu'), '.with-submenu found')
