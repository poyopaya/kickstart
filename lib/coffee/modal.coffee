modal = (el) ->
    $ = (el) -> return document.querySelectorAll(el)
    do (el) ->

  	  # Allow modal to dismiss when clicked outside
      $('body')[0].addEventListener 'click', ->
        # TODO: Assign this to el
        $('.se-modal[style="display: block;"]')[0].style.display = 'none';

      # TODO: Work with multiple elements
      $(el)[0].addEventListener 'click', (e) ->
        return e.stopPropagation();

k$.modal = modal

module.exports = modal
