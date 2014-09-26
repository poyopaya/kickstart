assert = require("chai").assert
expect = require("chai").expect

describe 'k$.dropdown', ->
  it 'should not apply to elements without uls', ->
    expect(k$.$$('#ddbutton1.with-submenu').length).to.equal(0)

  it 'should apply to button elements', ->
    assert(k$.$('#ddbutton2').classList.contains('with-submenu'), '.with-submenu found')

  describe 'button dropdown', ->
    it 'should show submenu when clicked', ->
      assert(!k$.$('#ddbutton2').classList.contains('open'), 'Does not contain open class')
      k$.testClick k$.$ '#ddbutton2'
      assert(k$.$('#ddbutton2').classList.contains('open'), 'Does contain open class')

    it 'should hide submenu when clicked again', ->
      assert(k$.$('#ddbutton2').classList.contains('open'), 'Does contain open class')
      k$.testClick k$.$ '#ddbutton2'
      assert(!k$.$('#ddbutton2').classList.contains('open'), 'Does not contain open class')

    it 'should hide submenu when clicked outside', ->
      assert(!k$.$('#ddbutton2').classList.contains('open'), 'Does not contain open class')
      k$.testClick k$.$ '#ddbutton2'
      assert(k$.$('#ddbutton2').classList.contains('open'), 'Does contain open class')
      k$.testClick document.body
      assert(!k$.$('#ddbutton2').classList.contains('open'), 'Does not contain open class')

  describe 'button with dropdown', ->
    it 'should hav a .with-submenu class for parent li', ->
      expect(k$.$('#ddbutton3 #dropdownParent').className).to.equal('with-submenu')

    it 'should show submenu when clicked', ->
      assert(!k$.$('#ddbutton3 #dropdownParent').classList.contains('open'), 'Does not contain open class')
      k$.testClick k$.$ '#ddbutton3 a.button-dropdown'
      assert(k$.$('#ddbutton3 #dropdownParent').classList.contains('open'), 'Does contain open class')

    it 'should hide submenu when clicked again', ->
      expect(k$.$('#ddbutton3 ul').style.display).to.equal('block')
      k$.testClick k$.$ '#ddbutton3 a.button-dropdown'
      expect(k$.$('#ddbutton3 ul').style.display).to.equal('none')

    it 'should hide submenu when clicked outside', ->
      expect(k$.$('#ddbutton3 ul').style.display).to.equal('none')
      k$.testClick k$.$ '#ddbutton3 a.button-dropdown'
      expect(k$.$('#ddbutton3 ul').style.display).to.equal('block')
      k$.testClick document.body
      expect(k$.$('#ddbutton3 ul').style.display).to.equal('none')
