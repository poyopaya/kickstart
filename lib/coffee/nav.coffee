nav = (el) ->

  try
    for $menuItem in k$.$(el).querySelectorAll('ul > li')
      do ($menuItem) ->
        # TODO: Is there a way we could not have an event listener for every
        # single one?
        $menuItem.addEventListener 'click', ->
          if $ul = $menuItem.querySelector('ul')
            $ul.style.display = (if $ul.style.display == 'block' then 'none' else 'block')

  catch e
    console.error "Could not instantiate as a nav.", e.message

  k$.$ el

k$.nav = nav

module.exports = nav
