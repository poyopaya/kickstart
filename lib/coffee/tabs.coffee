tabs = (el) ->
  $menuItems = k$.$(el).querySelectorAll('li')
  $menuItem.classList.add('menu-item') for $menuItem in $menuItems

  for $menuItem in $menuItems
    do ($menuItem) ->
      $menuLink = $menuItem.querySelector('a')
      $menuLink.dataset.link = $menuLink.href
      $menuLink.href = 'javascript:void(0);'

  k$.dropdown()

k$.tabs = tabs

module.exports = tabs
