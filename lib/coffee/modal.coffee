modal = (el) ->

  do (el) ->

    # Allow modal to dismiss when clicked outside
    document.body.addEventListener 'click', ->
      k$.$(el).style.display = 'none'

    k$.$(el).addEventListener 'click', (e) ->
      return e.stopPropagation()

  k$.$ el

k$.modal = modal

module.exports = modal
