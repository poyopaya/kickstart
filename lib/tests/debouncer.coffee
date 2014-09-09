assert = require("chai").assert
expect = require("chai").expect

describe 'Debouncer', ->
  it 'should fire after a default interval of 1 second.', ->
    expect(1).to.equal(0)
  it 'should suspend firing if called again during that second', ->
    expect(1).to.equal(0)
  it 'should fire after a custom interval', ->
    expect(1).to.equal(0)
  it 'should suspend firing if called again during a custom interval', ->
    expect(1).to.equal(0)
