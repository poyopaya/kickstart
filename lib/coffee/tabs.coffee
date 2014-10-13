tabs = (el) ->
  $tabSet = k$.$(el).querySelectorAll('li')
  $tab.classList.add('tab-item') for $tab in $tabSet

  $paneSet = new Array()
  for $_tab in $tabSet
    $id = $_tab.querySelector('a').getAttribute('href')
    $pane = k$.$("article#{$id}")
    $paneSet.push($pane)
    $pane.dataset.panel = 'true'

  for $tab in $tabSet
    # Create an array of panels by reading the links from each tab.
    $tabLink = $tab.querySelector('a')
    $tabLink.dataset.link = $tabLink.getAttribute 'href'
    $tabLink.href = 'javascript:void(0);'

    do ($tab, $tabLink, $paneSet) ->
      $tab.addEventListener 'click', ->

        # Reset tabs and panes only in this tabset
        $pane.classList.remove 'open' for $pane in $paneSet
        _$tab.classList.remove 'open' for _$tab in $tabSet

        # Add an open class uniquely to this tab and pane.
        k$.$("article#{$tabLink.dataset.link}").classList.add 'open'
        $tab.classList.add 'open'

k$.tabs = tabs

module.exports = tabs
