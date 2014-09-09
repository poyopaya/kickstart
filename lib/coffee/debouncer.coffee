debounce = (fn, id) ->

  k$.debounceQueue = id if k$.debounceQueue == null
  clearTimeout k$.debounceTimer if id == k$.debounceQueue
  k$.debounceTimer = setTimeout ->
    fn()
    k$.debounceQueue = null
  , 1000

k$.debounce = debounce

module.exports = debounce
