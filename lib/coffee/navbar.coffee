nav = (el) ->

  try
    # Wire up menu items
    $menuItems = k$.$(el).querySelectorAll('ul > li')

    # Prune items that don't contain uls
    _$menuItems = new Array()
    for $menuItem in $menuItems
      if $menuItem.querySelectorAll('ul').length and !$menuItem.querySelectorAll('[role="button"]').length
        _$menuItems.push $menuItem

    $menuItems = _$menuItems
    for $menuItem in $menuItems

      # For styling
      $menuItem.classList.add 'with-submenu'

    # Wire up the menu
    k$.dropdown()

  catch e
    console.error "Could not instantiate as a nav.", e.message

  $button = k$.$(el).querySelector('.navbar-title button')
  if $button
    $button.addEventListener 'click', ->
      $nav = k$.$(el).querySelector('nav')
      if $nav.classList.contains 'expand'
        $nav.classList.remove 'expand'
      else
        $nav.classList.add 'expand'

k$.nav = nav

module.exports = nav
