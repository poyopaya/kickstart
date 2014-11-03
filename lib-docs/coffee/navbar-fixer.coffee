window.onscroll = ->
  # This actually works great for one-offs, but not what we
  # need for the docs page
  # #######################################################
  #
  # $fixedAreas = k$.$$('.fixed-area')
  # for $fixedArea in $fixedAreas
  #   do ($fixedArea) ->
  #     $isFixed = $fixedArea.classList.contains 'fixed'
  #     if $fixedArea.getBoundingClientRect().top < 1
  #       $fixedArea.classList.add 'fixed' if not $isFixed
  #     else
  #       $fixedArea.classList.remove 'fixed' if $isFixed
