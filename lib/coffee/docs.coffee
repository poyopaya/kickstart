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
         $visibleStyle = if $container.nodeName == 'SPAN' then 'inline' else 'block'
         $container.style.display = (if settings.viewOptions["#{option}"] then $visibleStyle else 'none')
      for $container in $$(".ifnot-#{option}")
         $visibleStyle = if $container.nodeName == 'SPAN' then 'inline' else 'block'
         $container.style.display = (if settings.viewOptions["#{option}"] then 'none' else $visibleStyle)

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

  # Show growls
  if k$.$('#example-showGrowl')
    k$.$('#example-showGrowl').addEventListener 'click', ->
      growls = [
        {
          title: 'Document Saved.',
          text: 'Your document was successfully saved.'
          type: 'alert-green'
        },
        {
          title: 'Library book not found'
          text: 'Sorry, we could find that library book.',
          type: 'alert-red'
        },
        {
          title: 'Wide clearance selection',
          text: 'Remember to check out our clearance',
          type: 'alert-blue'
        },
        {
          title: 'Deadline approaching',
          text: 'Friendly reminder that your deadline is quickly approaching.',
          type: 'alert-yellow'
        }
      ]

      k$.exampleCounter++
      k$.exampleCounter = 0 if not k$.exampleCounter or k$.exampleCounter > 3

      k$.growl growls[k$.exampleCounter]

  # Show status message
  if k$.$('#example-showStatus')
    k$.$('#example-showStatus').addEventListener 'click', ->
      statuses = [
        {
          text: 'Document Saved.',
          type: 'success'
        },
        {
          text: 'Sorry, we could find that library book.',
          type: 'error'
        },
        {
          text: 'Remember to check out our clearance',
          type: 'info'
        },
        {
          text: 'Deadline is approaching!',
          type: 'warn'
        }
      ]

      k$.exampleCounter++
      k$.exampleCounter = 0 if not k$.exampleCounter or k$.exampleCounter > 3

      k$.status(statuses[k$.exampleCounter])

  k$.slugify = (str) ->
    `str.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')`

  # Create a table of contents
  $toc = document.createElement 'ul'
  $link = document.createElement('li')
  $link.innerHTML = '<a></a>'

  # Assuming proper html, start with h1.
  $headingLevel = 1

  # The node we're currently appending to. Always a ul.
  $targetNode = $toc

  for heading in k$.$$ '.mainpane h1, .mainpane h2, .mainpane h3, .mainpane h4, .mainpane h5, .mainpane h6'
    heading.id = k$.slugify heading.innerHTML

    # If this is a lower level.
    if parseInt heading.nodeName.substr(1,1) > $headingLevel
      # Append a new submenu and make that the targetNode.
      $newSubmenu = $toc.cloneNode true
      $targetNode.appendChild $newSubmenu
      $targetNode = $newSubmenu

    # Make a new li and append it to the target ul node.
    $menuItem = $link.cloneNode true
    $menuItem.querySelector('a').href = "##{heading.id}"
    $menuItem.querySelector('a').innerHTML = heading.innerHTML
    $targetNode.appendChild $menuItem

  console.log $toc
