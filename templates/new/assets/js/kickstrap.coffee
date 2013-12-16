#= require "_settings"
#= require "_extend"
#= require "_badge"
#= require "_jspm"

# Set defaults and extend with user's customizations
k$settings = extend(
	mode: 'dev'
	firebaseName: 'kickstrap-demo'
	version: '2.0.0 alpha'
, window.k$ or {})

# Create global k$ object
k$ = window.k$ = () ->
k$.settings = k$settings

# Reassignment of JSPM one-off app-loading
k$.import = (app) -> jspm.import app

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