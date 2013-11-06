define ['./module'], (controllers) ->
	controllers.controller 'FeaturesCtrl', ['$scope', ($scope) ->
		$scope.test = 'test'
	]