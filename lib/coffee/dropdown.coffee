dropdown = ->

  $buttons = k$.$$('button, [role="button"]')

  for $button in $buttons
    if $button.querySelectorAll('ul')
      $button.classList.add 'with-submenu'

k$.dropdown = dropdown

module.exports = dropdown
