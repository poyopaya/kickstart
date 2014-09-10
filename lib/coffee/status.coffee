status = (opts) ->

  defaults =
    type: 'warn'
    delay: 2000

  status = k$.extend defaults, opts

  if not k$.$$('#status-bar').length
    $statusBar = document.createElement('div')
    $statusBar.id = 'status-bar'
    $statusBar.className = 'status-bar'
    $statusBar.innerHTML = "<div class='status-bar_status' id='status-bar_status'></div>"
    document.body.appendChild($statusBar)

  $statusBar = k$.$('#status-bar')

  hideStatusBar = ->
    $statusBar.parentNode.removeChild $statusBar

  if status.delay > 0
    k$.debounce hideStatusBar, 'hideStatusBar', status.delay

  $status = k$.$("#status-bar_status")
  $status.innerHTML = status.text
  $status.dataset.type = status.type || 'warn'

k$.status = status

module.exports = status
