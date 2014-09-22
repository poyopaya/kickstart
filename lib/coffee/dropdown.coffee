dropdown = ->

  ($button.classList.add 'with-submenu' if $button.querySelectorAll('ul').length) for $button in k$.$$("button")

k$.dropdown = dropdown

module.exports = dropdown
