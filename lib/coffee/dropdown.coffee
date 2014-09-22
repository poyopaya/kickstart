dropdown = ->

  for $button in k$.$$("button")
    if $button.querySelectorAll('ul').length
      $button.classList.add 'with-submenu'

k$.dropdown = dropdown

module.exports = dropdown
