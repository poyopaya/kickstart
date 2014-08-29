# BASIC SITE SETTINGS

window.k$ =

	# Apps
	# Local apps to be loaded on every page.
	apps: [
		'ks:sample-app'
		'ks:tinygrowl'
		'ks:ang-app'
		'ks:kickstrap-logo'
	]

	# Angular components
	angular:
		controllers: [
			'messages'
			'products'
			'docs'
			'home'
			'login'
		]
		directives: [
			'enter'
			'visible'
			'repeat'
		]
		filters: [
			'startFrom'
		]
		pages: [
			'first-steps'
			'apps'
			'api'
			'coffeescript'
			'jade'
			'pages'
			'partials'
			'roots'
			'stylus'
			'templates'
			'acknowledgments'
			'optimizations'
			'social-login'
			'growls'
		]

	# Firebase URI
	# firebaseName: 'kickstrap-demo'

	# Versioning for your Firebase (e.g. https://myfb.firebaseio.com/v1-0/products)
	firebaseNameVersion: 'v2-0'

	# Only edit if you know what you're doing.
	core: [
		'jquery'
		'bootstrap'
		'angular'
		'fontawesome'
	]

System.map = 
	'jquery': 				'github:components/jquery@2.0'
	'bootstrap': 			'github:twbs/bootstrap@3.0/js/bootstrap'
	'angular': 				'github:angular/bower-angular@1.2.1'
	'angularFire': 			'github:firebase/angularFire@0.5'
	'ang-app': 				'ks:ang-app'
	'angular-route':		'ks:ang-app/resources/angular-route'
	'gatedScope':			'ks:ang-app/resources/gatedScope'
	'fontawesome': 			'github:FortAwesome/Font-Awesome@4.0.3/css/font-awesome.min.css!'
	'ngProgress':			'ks:ang-app/resources/ngprogress'
	'firebaseSimpleLogin':	'ks:ang-app/resources/firebaseSimpleLogin'
	'css': 					'github:jspm/plugin-css/css'

# some packages need shim config
System.shim =
	'github:angular/bower-angular@1.2.1/angular.min': 
		exports: 'angular'
	'ks:ang-app/resources/angular-route': 		['angular']
	'ks:ang-app/resources/ngprogress': 			['angular']
	'ks:ang-app/resources/gatedScope': 			['angular']

# deep extension for applying default settings
window.extend = (objA, objB) ->
	for p of objB
		if typeof objA[p] is "object"
			extend objA[p], objB[p]
		else
			objA[p] = objB[p]
	objA

try
	console.log('%cKickstrap', 'font-style:italic;font-family: helvetica neue, helvetica, sans-serif;font-size:20px;color:#FDD726;text-shadow:0 1px 0 #D1B43B,0 2px 0 #D1B43B,0 3px 0 #D1B43B,0 4px 0 #D1B43B,0 5px 0 #D1B43B,0 6px 1px rgba(30,28,23,.1),0 0 5px rgba(30,28,23,.1),0 1px 3px rgba(30,28,23,.3),0 3px 5px rgba(30,28,23,.2),0 5px 10px rgba(30,28,23,.25),0 10px 10px rgba(30,28,23,.2),0 20px 20px rgba(30,28,23,.15);') 
catch
	return

# Future-proofing
# window.System = window.jspm

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

System.urlArgs = '?bust=' + new Date().getTime() if k$.settings.mode == 'dev'

# Add the "ks:" namespace
System.paths['ks:*'] = 'apps/*.js'

# auto main entry point to 'main'
systemNormalize = System.normalize;
System.normalize = (name, parentName, parentAddress) ->
  Promise.resolve systemNormalize.call(this, name, parentName, parentAddress)
  .then (normalized) ->
    if (normalized.substr(0, 3) == 'ks:' && normalized.split('/').length == 1)
      normalized += '/main';
    normalized;

# compatibility layer
# supports old jspm.import function
window.jspm =
	import: (names, callback, errback) ->
		if typeof names == 'string'
			names = [names];
		
		(Promise.all names.map (n) -> System.import(n))
		.then (modules) ->
			callback.apply null, modules
		.catch errback


# Build angular app core
k$.appCore = []
k$.appCore.push 'ks:ang-app/controllers/' + ctrl for ctrl in k$.settings.angular.controllers
k$.appCore.push 'ks:ang-app/directives/' + dctv for dctv in k$.settings.angular.directives
k$.appCore.push 'ks:ang-app/filters/' + filter for filter in k$.settings.angular.filters

jspmResources = jspmResources.concat k$settings.apps
jspmResources = jspmResources.concat k$.appCore

# this can be changed to Promise.all in due course
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
.catch (e) ->
	setTimeout () -> 
	  throw e
	, 1000
