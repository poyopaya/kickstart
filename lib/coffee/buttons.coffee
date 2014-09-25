button = ->

  ($button.classList.add 'with-submenu' if $button.querySelectorAll('ul').length) for $button in k$.$$("button")
  $buttonDropdown.parentNode.classList.add 'with-submenu' for $buttonDropdown in k$.$$ '.button-dropdown'

k$.button = button

module.exports = button
