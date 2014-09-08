status = (opts) ->

  if not k$.$$('#status-bar').length
    $statusBar = document.createElement('div')
    $statusBar.id = 'status-bar'
    $statusBar.className = 'status-bar'
    $statusBar.innerHTML = '<div class="status-bar_status" id="status-bar_status"></div>'
    document.body.appendChild($statusBar)

  status = opts # TODO: Extend with defaults.

  # Delaying would be a great job for the debouncer.

  k$.$("#status-bar_status").innerHTML = status.text

k$.status = status

module.exports = status
