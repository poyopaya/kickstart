nav = (el) ->

  try
    for $menuItem in k$.$(el).querySelectorAll('ul > li')
      do ($menuItem) ->
        # TODO: Everything

  catch e
    console.error "Could not instantiate as a nav.", e.message

  k$.$ el

k$.nav = nav

module.exports = nav
