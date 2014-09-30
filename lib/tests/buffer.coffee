assert = require("chai").assert
expect = require("chai").expect

describe "Buffer", (done) ->
  it "Should not prematurely fire functions", ->

    window.xArray = new Array()

    k$.buffer ->
      xArray.push(1)

    k$.buffer ->
      xArray.push(2)

    k$.buffer ->
      xArray.push(3)

    expect(xArray[0]).to.be.undefined
    expect(xArray[1]).to.be.undefined
    expect(xArray[2]).to.be.undefined

  it "Should execute all functions 2s between each other (1/3)", (done) ->
    this.timeout 2200

    setTimeout ->
      if xArray[0] == 1 && xArray[1] == undefined && xArray[2] == undefined
        done()
      else
        console.error "xArray was #{xArray}"
    , 2100

  it "Should execute all functions 2s between each other (2/3)", (done) ->
    this.timeout 2200

    setTimeout ->
      if xArray[0] == 1 && xArray[1] == 2 && xArray[2] == undefined
        done()
      else
        console.error "xArray was #{xArray}"
    , 2100

  it "Should execute all functions 2s between each other (3/3)", (done) ->
    this.timeout 2200

    setTimeout ->
      if xArray[0] == 1 && xArray[1] == 2 && xArray[2] == 3
        done()
      else
        console.error "xArray was #{xArray}"
    , 2100
