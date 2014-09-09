status = (opts) ->

  status = opts # TODO: Extend with defaults.

  if not k$.$$('#status-bar').length
    $statusBar = document.createElement('div')
    $statusBar.id = 'status-bar'
    $statusBar.className = 'status-bar'
    $statusBar.innerHTML = "<div class='status-bar_status' id='status-bar_status'></div>"
    document.body.appendChild($statusBar)

  # Delaying would be a great job for the debouncer.

  $status = k$.$("#status-bar_status")
  $status.innerHTML = status.text
  $status.dataset.type = status.type || 'warn'

k$.status = status

module.exports = status
