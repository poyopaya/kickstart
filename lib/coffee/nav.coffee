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

    # Wire up the menu
    k$.dropdown()

  catch e
    console.error "Could not instantiate as a nav.", e.message

  k$.$ el


k$.nav = nav

module.exports = nav
