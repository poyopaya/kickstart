assert = require("chai").assert

describe 'Kickstart main function', ->
  it 'should exist as an object', ->
    assert.typeOf k$, 'object', 'k$ is an object'
