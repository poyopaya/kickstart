document.addEventListener 'DOMContentLoaded', ->

  window.$$ = (el) -> document.querySelectorAll(el)
  window.$ = (el) -> $$(el)[0]

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

    # TODO: DRY off
    for $container in $$('.if-jquery')
      $container.style.display = (if settings.viewOptions.jquery then 'block' else 'none')
    for $container in $$('.ifnot-jquery')
      $container.style.display = (if settings.viewOptions.jquery then 'none' else 'block')
    for $container in $$('.if-semantic')
      $container.style.display = (if settings.viewOptions.semantic then 'block' else 'none')
    for $container in $$('.ifnot-semantic')
      $container.style.display = (if settings.viewOptions.semantic then 'none' else 'block')

  # Write to localStorage
  setSettings(settings)

  # TODO: Hardcode this a little less
  if $$('#docs-jquery').length and $$('#docs-semantic').length
    # This page has checkboxes for view options.
    $optJquery = $ '#docs-jquery'
    $optSemantic = $ '#docs-semantic'

    # Set state of buttons based on saved options in localStorage
    $optJquery.checked = (if settings.viewOptions.jquery then true else false)
    $optSemantic.checked = (if settings.viewOptions.semantic then true else false)

    # TODO: DRY off
    # Listen for checkbox changes
    $optJquery.addEventListener 'click', ->
      self = this
      settings.viewOptions.jquery = self.checked
      setSettings settings

    $optSemantic.addEventListener 'click', ->
      self = this
      settings.viewOptions.semantic = self.checked
      setSettings settings
