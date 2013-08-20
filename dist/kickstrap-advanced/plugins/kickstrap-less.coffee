# LESS plugin
# ---------------------

less = module.require('less')

exports.settings =
  file_type: 'less'
  target: 'css'

exports.compile = (file, callback) ->
  error = false
  compiled_contents = null

  try
    options =
      filename: file.path
    parser = new less.Parser(options)
    parser.parse(file.contents, (error, cssTree) ->
      console.log error if error
      compiled_contents = cssTree.toCSS()
    )
  catch err
    error = err

  callback(error, compiled_contents)
