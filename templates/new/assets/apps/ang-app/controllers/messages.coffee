define ['./module'], (controllers) ->
	controllers.controller 'MessagesCtrl', ['$scope', '$firebase', 'ngProgress', ($scope, $firebase, ngProgress) ->
		$scope.threads = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/threads/"
		$scope.contacts = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/contacts/"
		$scope.contacts.$on 'loaded', ->

		$scope.threads.$on 'loaded', ->
			$scope.contactForId = (id) ->
				$scope.contacts[id]
			$scope.selectedThread = $scope.threads[0]
			$scope.setSelectedThread = (thread) ->
				$scope.selectedThread = thread
	]