define ['./module'], (controllers) ->
	controllers.controller 'DemoCtrl', ['$scope', 'angularFire', ($scope, angularFire) ->
		$scope.fName = ' '
		$scope.lName = ' '
		$scope.fullName = () ->
			$scope.fName + ' ' + $scope.lName
	]