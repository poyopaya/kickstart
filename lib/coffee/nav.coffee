nav = (el) ->

  try
    $menuItems = k$.$(el).querySelectorAll('ul > li')
    # Prune items that don't contain uls
    _$menuItems = new Array()
    for $menuItem in $menuItems
      _$menuItems.push $menuItem if $menuItem.querySelectorAll('ul').length

    $menuItems = _$menuItems
    for $menuItem in $menuItems
      # For styling
      $menuItem.classList.add 'with-submenu'

      do ($menuItem) ->
        # TODO: Is there a way we could not have an event listener for every
        # single one?
        $menuItem.addEventListener 'click', (e) ->

          # Prevent bubbling
          e.stopPropagation()

          # Reset all
          _$menuItem.classList.remove 'open' for _$menuItem in document.querySelectorAll('.with-submenu')
          $ul = $menuItem.querySelector 'ul'
          $subMenu.style.display = 'none' for $subMenu in document.querySelectorAll('.with-submenu ul')

          # Open this one
          if $ul
            $menuItem.classList.add 'open'
            $ul.style.display = (if $ul.style.display == 'block' then 'none' else 'block')

    # Dismiss all
    document.body.addEventListener 'click', ->
      $ul.style.display = 'none' for $ul in k$.$(el).querySelectorAll('ul li ul')
      $li.classList.remove 'open' for $li in k$.$(el).querySelectorAll('ul li')

  catch e
    console.error "Could not instantiate as a nav.", e.message

  k$.$ el


k$.nav = nav

module.exports = nav
