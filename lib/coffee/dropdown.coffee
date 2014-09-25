dropdown = ->

  # The following should apply to both navigation elements and dropdown buttons

  $menuItems = k$.$$ '.with-submenu'

  for $menuItem in $menuItems

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
    $ul.style.display = 'none' for $ul in k$.$$('.with-submenu > ul')
    $li.classList.remove 'open' for $li in k$.$$('.with-submenu.open')

k$.dropdown = dropdown

module.exports = dropdown
