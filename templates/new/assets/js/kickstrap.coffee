k$settings = extend(
	theme: 'kickstrap'
	mode: 'dev'
	firebaseName: 'kickstrap-demo'
	version: '2.0.0 alpha'
, window.k$ or {})

k$ = window.k$ = () ->

#= require "_badge"
#= require "_jspm"
#= require "_extend"

k$.loadApp = () ->
k$.settings = k$settings
k$.app = (name, options) ->
	htmlElement = document.body.childNodes[document.body.childNodes.length - 3]

	jspm.import name, (app) ->
		app.attach htmlElement, options

k$.readyFxs = []
k$.ready = (fx) ->
	k$.readyFxs.push(fx)

jspmResources = k$.settings.core

jspm.config.urlArgs = '?bust=' + new Date().getTime() if k$.settings.mode == 'dev'

jspmResources = jspmResources.concat k$settings.apps

###
# Add Angular Resources
controllers = []
controllers.concat './ang-app/controllers/' + ctrl for ctrl in k$.settings.controllers
console.log controllers
jspmResources = jspmResources.concat controllers
###

jspm.import jspmResources, ($, app, angular) ->
	$(document).ready ->
		document.body.className += 'loaded'
		angular.bootstrap document, ['app']
		i = 0
		while i < k$.readyFxs.length
			k$.readyFxs[i]()
			i++
		k$.ready = (fx) ->
			fx()