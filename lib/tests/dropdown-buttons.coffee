assert = require("chai").assert
expect = require("chai").expect

describe 'k$.dropdown', ->
  it 'should apply to elements with "role=button"', ->
    assert(k$.$('#ddbutton1').classList.contains('with-submenu'), '.with-submenu found')
  it 'should apply to button elements', ->
    assert(k$.$('#ddbutton2').classList.contains('with-submenu'), '.with-submenu found')
