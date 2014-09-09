assert = require("chai").assert
expect = require("chai").expect

describe 'Status', ->
  it 'should create a status bar and status element.', ->
    k$.status
      title: 'Hello world'
    expect(k$.$$('#status-bar').length).to.be.above(0)
  it 'should apply a custom class to status element.', ->
    k$.status
      title: 'Hello world'
      type: 'error'
    expect(k$.$$('#status-bar #status-bar_status[data-type="error"]').length).to.be.above(0)
  it 'should disappear via debouncer.', (done) ->
    this.timeout 2500
    setTimeout ->
      if (k$.$$('#status-bar').length == 0)
        done()
      else
        console.error "Found #{k$.$$('#status-bar').length}"
    , 2200
  it 'should dethrottle the hiding of the status bar.', (done) ->
    this.timeout 3000
    k$.status
      text: 'A' # Should disappear after 2000
    
    setTimeout ->
      k$.status
        text: 'B'
    , 1000      # Should take another 2000 (3000)

    setTimeout ->
      if k$.$$('#status-bar').length > 0
        done()
      else
        console.error "Found #{k$.$$('#status-bar').length}"
    , 2500

