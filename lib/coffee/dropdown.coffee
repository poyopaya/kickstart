dropdown = ->

  # The following should apply to both navigation elements and dropdown buttons

  $menuItems = k$.$$ '.with-submenu'

  for $_menuItem in $menuItems

    $menuItem = $_menuItem.cloneNode true
    $_menuItem.parentNode.replaceChild $menuItem, $_menuItem

    do ($menuItem) ->
      # TODO: Is there a way we could not have an event listener for every
      # single one?
      $menuItem.addEventListener 'click', (e) ->

        console.log $menuItem

        # Just close it if it's already open
        if $menuItem.classList.contains 'open'
          $menuItem.classList.remove 'open'
          $menuItem.querySelector('ul').style.display = 'block'
          return

        # Reset all
        _$menuItem.classList.remove 'open' for _$menuItem in document.querySelectorAll('.with-submenu')
        $ul = $menuItem.querySelector 'ul'
        $subMenu.style.display = 'none' for $subMenu in document.querySelectorAll('.with-submenu ul')

        # Open this one
        if $ul
          $menuItem.classList.add 'open'

          # TODO: Perhaps this should be set in CSS via the .open class.
          $ul.style.display = (if $ul.style.display == 'block' then 'none' else 'block')

        # Prevent bubbling
        e.stopPropagation()

  # Dismiss all
  document.body.addEventListener 'click', ->
    $ul.style.display = 'none' for $ul in k$.$$('.with-submenu > ul')
    $li.classList.remove 'open' for $li in k$.$$('.with-submenu.open')

k$.dropdown = dropdown

module.exports = dropdown
