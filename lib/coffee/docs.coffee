document.addEventListener 'DOMContentLoaded', ->

  $$ = (el) -> document.querySelectorAll(el)
  $ = (el) -> $$(el)[0]

  ###
  CRUD DOCUMENTATION SETTINGS
  ###

  # Default settings
  defaults =
    viewOptions:
      jquery: false
      semantic: true

  # Retrieve user's saved settings
  options = JSON.parse localStorage.getItem 'kickstartDocs'

  # Create shallow extend function
  # (http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/)
  extend = (destination, source) ->
    for property of source
      if source[property] and source[property].constructor and source[property].constructor is Object
        destination[property] = destination[property] or {}
        arguments.callee destination[property], source[property]
      else
        destination[property] = source[property]
    destination

  # Extend from defaults
  settings = if options then extend defaults, options else defaults

  # Create function to write to localStorage
  setSettings = (settings) ->
    localStorage.setItem 'kickstartDocs', JSON.stringify settings

  # Write to localStorage
  setSettings(settings)

  # TODO: Hardcode this a little less
  if $$('#docs-jquery').length and $$('#docs-semantic').length
    # This page has checkboxes for view options.
    $optJquery = $ '#docs-jquery'
    $optSemantic = $ '#docs-semantic'

    # Set state of buttons based on saved options in localStorage
    if settings.viewOptions.jquery then $optJquery.checked = true
    if settings.viewOptions.semantic then $optSemantic.checked = true
