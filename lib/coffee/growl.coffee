growl = (params) ->

  # Create growl container
  if not k$.$$('.growl_container').length
    growlContainer = document.createElement 'div'
    growlContainer.className = 'growl_container'
    document.body.appendChild growlContainer

  # Create growl
  growl = document.createElement 'div'

  # Add appropriate classes
  className = "alert growl"
  className += "#{params.type}" if params.type
  growl.className = className

  # Add content
  content = ""
  content += "<h1>#{params.title}</h1>" if params.title
  content += "<p>#{params.text}</p>" if params.text
  growl.innerHTML = content

  # Append child to container
  k$.$('.growl_container').appendChild growl


k$.growl = growl

module.exports = growl
