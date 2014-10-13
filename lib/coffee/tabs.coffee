tabs = (el) ->
  $tabSet = k$.$(el).querySelectorAll('li')
  $tab.classList.add('tab-item') for $tab in $tabSet

  for $tab in $tabSet
    do ($tab) ->
      $tabLink = $tab.querySelector('a')
      $tabLink.dataset.link = $tabLink.getAttribute 'href'
      $tabLink.href = 'javascript:void(0);'

      $tab.addEventListener 'click', ->

        # Reset tabs only in this tabset
        _$tab.classList.remove 'open' for _$tab in $tabSet
        $tab.classList.add 'open'
        document.querySelector("article#{$tabLink.dataset.link}").classList.add 'open'

k$.tabs = tabs

module.exports = tabs
