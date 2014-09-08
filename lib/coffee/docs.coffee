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

  booleanViewOptions = ['jquery', 'semantic']

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

    for option in booleanViewOptions
      for $container in $$(".if-#{option}")
         $container.style.display = (if settings.viewOptions["#{option}"] then 'block' else 'none')
      for $container in $$(".ifnot-#{option}")
         $container.style.display = (if settings.viewOptions["#{option}"] then 'none' else 'block')

  # Write to localStorage
  setSettings(settings)

  els = []
  for option in booleanViewOptions
    option = "#docs-#{option}"
    els.push option

  if $$(els).length
    # This page has checkboxes for view options.
    for option in booleanViewOptions
      # Closure needed for event listeners
      do (option) ->
        window["$opt#{option}"] = $ "#docs-#{option}"

        # Set state of buttons based on saved options in localStorage
        window["$opt#{option}"].checked = (if settings.viewOptions["#{option}"] then true else false)

        # Listen for checkbox changes
        window["$opt#{option}"].addEventListener 'click', ->
          settings.viewOptions["#{option}"] = this.checked
          console.log settings.viewOptions
          setSettings settings
