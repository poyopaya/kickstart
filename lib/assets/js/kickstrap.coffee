#= require "_badge"
#= require "_jspm"
#= require "_extend"

k$settings = extend(
	theme: 'bootstrap'
	mode: 'dev'
	firebaseName: 'kickstrap-demo'
	version: '2.0.0 alpha'
, window.k$ or {})

k$ = window.k$ = () ->

k$.loadApp = () ->
k$.settings = k$settings
k$.app = (name, options) ->
	htmlElement = document.body.childNodes[document.body.childNodes.length - 3]

	jspm.import name, (app) ->
		app.attach htmlElement, options

	jspm.set 'jquery',
		'default': $
k$.readyFxs = []
k$.ready = (fx) ->
	k$.readyFxs.push(fx)

jspmResources = ['jquery', 'angular', 'bootstrap', 'domReady', 'ng-bootstrap']

jspm.config.urlArgs = '?bust=' + new Date().getTime() if k$.settings.mode == 'dev'

i = 0
while i < k$settings.apps.length
	jspmResources.push "kickstrap:" + k$settings.apps[i] + "/" + k$settings.apps[i]
	i++

jspmResources.push './themes/' + k$settings.theme + '.css!'
jspm.import jspmResources, ($, angular, app) ->
	$(document).ready ->
		document.body.className = 'loaded'
		i = 0
		while i < k$.readyFxs.length
			k$.readyFxs[i]()
			i++