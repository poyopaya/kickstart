assert = require("chai").assert
expect = require("chai").expect

describe 'k$.nav()', ->
  it 'should return a DOM element', ->
    expect(k$.nav('#test-nav')).to.be.a('object')
  it 'should open submenus on click', ->
    expect(k$.$('#test-nav #test-nav-submenu').style.display).to.be('none')
    k$.testClick k$.$ '#test-nav #test-nav-submenu-link'
    expect(k$.$('#test-nav #test-nav-submenu').style.display).to.be('block')
