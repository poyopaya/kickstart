modal = (el) ->

  `var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent )`
  
  # Cursor pointer hack if iOS
  document.body.classList.add 'dismiss-modal' if iOS

  do (el) ->

    # Allow modal to dismiss when clicked outside
    document.body.addEventListener 'click', ->
      k$.$(el).style.display = 'none'

    k$.$(el).addEventListener 'click', (e) ->
      return e.stopPropagation()

  k$.$ el

k$.modal = modal

module.exports = modal
