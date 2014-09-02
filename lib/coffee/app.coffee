System = require 'systemjs'

###
System.import('./app').then (m) ->
  console.log(m)
, (e) ->
  console.log(e)
###
