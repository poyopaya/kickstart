dropdown = ->

  ($button.classList.add 'with-submenu' if $button.querySelectorAll('ul').length) for $button in k$.$$("button")
  $buttonDropdown.parentNode.classList.add 'with-submenu' for $buttonDropdown in k$.$$ '.button-dropdown'

  # The following should apply to both navigation elements and dropdown buttons

  

k$.dropdown = dropdown

module.exports = dropdown
