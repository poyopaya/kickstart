buffer = (fn, delay) ->

  # Create a new bufferArray if one does not exist already.
  k$.bufferArray = k$.bufferArray || new Array()
  if not k$.bufferArray.length
    k$.bufferArray = new Array()

    delay = delay || 2000

    # Create an interval to fire the fns in bufferArray
    i = 0
    k$.bufferInterval = setInterval ->
      k$.bufferArray[i]()
      i++
      console.log i
      if i >= k$.bufferArray.length
        clearInterval k$.bufferInterval
        k$.bufferArray = []
        i = 0
    , delay

  # Add this function to the array.
  k$.bufferArray.push fn

k$.buffer = buffer

module.exports = buffer
