assert = require("chai").assert
expect = require("chai").expect

describe 'Tabs', ->
  it 'should instantiate', ->
    k$.tabs('#test-tabs')

  it 'should read for user set "open" class and set view accordingly.', ->
    expect(k$.$('#panel-one').classList.contains('open')).to.be(true)

  it 'should add an open class to a tab when clicked upon', ->
    k$.testClick k$.$('#test-tabs #tab-three')
    expect(k$.$('#test-tabs #tab-holder-one').classList.contains('open')).to.be(false)
    expect(k$.$('#test-tabs #tab-holder-three').classList.contains('open')).to.be(true)
