#= require "_badge"
#= require "_jspm"
#= require "_extend"

k$settings = extend(
	theme: 'monaco'
	mode: 'development'
	firebaseName: 'kickstrap-demo'
, window.k$ or {})


window.k$ = () ->
	@loadApp = () ->
	@version = '2.0.0 alpha'
	@settings = k$settings
	@widget = (name, options) ->
		htmlElement = document.body.childNodes[document.body.childNodes.length - 3]

		jspm.import name, (widget) ->
			widget.attach htmlElement, options

		jspm.set 'jquery',
			'default': $
	@readyFxs = []
	@ready = (fx) -> 
		k$.readyFxs.push(fx)
	@firebaseName = 'kickstrap-demo'

	jspmResources = ['jquery', 'angular-kickstrap']

	jspmResources.push 'kickstrap:' + k$settings.appName + '/' + k$settings.appName
	
	i = 0
	while i < k$settings.apps.length
		jspmResources.push "kickstrap:" + k$settings.apps[i] + "/" + k$settings.apps[i]
		i++

	jspmResources.push './themes/' + k$settings.theme + '.css!'

	jspm.import jspmResources, ($, angular, app) ->
		angular.bootstrap document, [k$settings.appName]
		$(document).ready ->
			document.body.className = 'loaded'

			i = 0
			while i < readyFxs.length
				readyFxs[i]()
				i++