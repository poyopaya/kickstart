angular.module('messages', [k$.settings.appName]).controller('MessagesCtrl', ['$scope', 'angularFire', ($scope, angularFire) ->

	$scope.allThreads = []
	threads = new Firebase 'https://' + k$.firebaseName + '.firebaseio.com/threads/'
	promise = angularFire threads, $scope, 'allThreads'

	$scope.allThreads = []
	contacts = new Firebase 'https://' + k$.firebaseName + '.firebaseio.com/contacts/'
	promise = angularFire contacts, $scope, 'contacts'

	$scope.contactForId = (id) ->
		contactIndex = 0
		$.grep($scope.contacts, (e, i) -> contactIndex = i if e.id == id )
		$scope.contacts[contactIndex]
	$scope.selectedThread = $scope.allThreads[0]
	$scope.setSelectedThread = (thread) ->
		$scope.selectedThread = thread

])