nav = (el) ->

  try
    for $menuItem in k$.$(el).querySelectorAll('ul > li')
      do ($menuItem) ->
        # TODO: Is there a way we could not have an event listener for every
        # single one?
        $menuItem.addEventListener 'click', (e) ->
          e.stopPropagation()
          $ul = $menuItem.querySelector 'ul'
          $subMenu.style.display = 'none' for $subMenu in k$.$(el).querySelectorAll('ul > li > ul')
          if $ul
            $ul.style.display = (if $ul.style.display == 'block' then 'none' else 'block')

    # Allow modal to dismiss when clicked outside
    document.body.addEventListener 'click', ->
      $ul.style.display = 'none' for $ul in k$.$(el).querySelectorAll('ul li ul')

  catch e
    console.error "Could not instantiate as a nav.", e.message

  k$.$ el

k$.nav = nav

module.exports = nav
