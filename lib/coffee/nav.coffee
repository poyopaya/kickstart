nav = (el) ->

  try
    # Add a responsive button to the last ul
    if k$.$(el).querySelectorAll('nav > ul').length > 1
      $button = document.createElement 'li'
      $button.innerHTML = "<button class='navbar-button' role='button'>+</button>"
      k$.$(el).querySelector('nav > ul:last-child').appendChild $button
    
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

  k$.$ el


k$.nav = nav

module.exports = nav
