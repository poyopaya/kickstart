window.onscroll = ->
  $marker = k$.$('#marker')
  $fixedArea = k$.$('.fixed-area')
  $offset = $marker.getBoundingClientRect().top
  $isFixed = $fixedArea.classList.contains 'fixed'
  if $offset < 1
    $fixedArea.classList.add 'fixed' if not $isFixed
  else
    $fixedArea.classList.remove 'fixed' if $isFixed
