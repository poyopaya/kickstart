define ['./module'], (controllers) ->
	controllers.controller 'MessagesCtrl', ['$scope', '$firebase', 'ngProgress', ($scope, $firebase, ngProgress) ->
		$scope.threads = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/threads/"
		$scope.contacts = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/contacts/"
		$scope.contacts.$on 'loaded', ->

			# CRUD - Contacts

			$scope.contacts.create = () ->
				$scope.contacts.$add
					fName: 'New'
					lName: 'Contact'
					email: 'newcontact@example.com'
					img: '...'
					bio: '...'
			$scope.contacts.update = () ->
				try 
					$scope.contacts.$save $scope.selectedKey
					$.growl
						title: 'Saved successfully'
						type: 'success'
						delay: 1000
				catch error
					$.growl
						title: 'Could not save:<br>'
						text: error
						type: 'danger'
						delay: 1000
			$scope.contacts.delete = () ->
				( $scope.contacts.$remove key if $scope.contacts[key].val ) for key in $scope.contacts.$getIndex()
				$scope.contacts.countSelected()

			# SETTINGS - Contacts

			$scope.contacts.selectAll = (val) ->
				$scope.contacts[key].val = val for key in $scope.contacts.$getIndex()
				$scope.contacts.countSelected()
			$scope.contacts.selectionCount = 0
			$scope.contacts.countSelected = () ->
				$scope.contacts.selectionCount = 0
				( $scope.contacts.selectionCount++ if $scope.contacts[key].val ) for key in $scope.contacts.$getIndex()
			$scope.selectedKey = null
			$scope.contacts.select = (key) ->
				$scope.selectedKey = key

		$scope.threads.$on 'loaded', ->

			# CRUD - Threads

			$scope.threads.create = () ->
				$scope.threads.$add
					subject: 'New'
					read: false
			$scope.threads.update = () ->
				try 
					$scope.threads.$save $scope.selectedKey
					$.growl
						title: 'Saved successfully'
						type: 'success'
						delay: 1000
				catch error
					$.growl
						title: 'Could not save:<br>'
						text: error
						type: 'danger'
						delay: 1000
			$scope.threads.delete = () ->
				( $scope.threads.$remove key if $scope.threads[key].val ) for key in $scope.threads.$getIndex()
				$scope.threads.countSelected()

			# SETTINGS - Threads

			$scope.threads.selectAll = (val) ->
				$scope.threads[key].val = val for key in $scope.threads.$getIndex()
				$scope.threads.countSelected()
			$scope.threads.selectionCount = 0
			$scope.threads.countSelected = () ->
				$scope.threads.selectionCount = 0
				( $scope.threads.selectionCount++ if $scope.threads[key].val ) for key in $scope.threads.$getIndex()
			$scope.selectedKey = null
			$scope.threads.select = (key) ->
				$scope.selectedKey = key
				$scope.selectedType = 'thread'

			# SETTINGS - Messages

			$scope.threads.messages = new Object() # Just for the sake of being semantic.
			$scope.threads.messages.selectAll = (val, parentKey) ->

				message.val = val for message in $scope.threads[parentKey].messages
				$scope.threads.messages.countSelected(parentKey)

			$scope.threads.messages.countSelected = (parentKey) ->
				$scope.threads[parentKey].messages.selectionCount = 0
				( $scope.threads[parentKey].messages.selectionCount++ if message.val ) for message in $scope.threads[parentKey].messages
			$scope.threads.messages.select = (key, parentKey) ->
				console.log key
				console.log parentKey
				$scope.selectedKey = key
				$scope.selectedParentKey = parentKey
				$scope.selectedType = 'message'

		$scope.contactForId = (id) ->
			$scope.contacts[id]
		$scope.selectedThread = $scope.threads[0]
		$scope.setSelectedThread = (thread) ->
			$scope.selectedThread = thread
	]