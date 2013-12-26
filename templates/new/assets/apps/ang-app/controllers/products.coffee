define ['./module'], (controllers) ->
	controllers.controller 'ProductsCtrl', ['$scope', '$firebase', 'ngProgress', ($scope, $firebase, ngProgress) ->
		$scope.featuredProducts = []

		# Assigning also to genericItems allows for loosely-coupled use in pagination include
		$scope.products = $scope.genericItems = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/products/"
		$scope.products.$on 'loaded', ->

			# Pagination

			$scope.currentPage = 0
			$scope.pageSize = 10
			$scope.numPages = () ->
				Math.ceil Object.keys($scope.genericItems).length/$scope.pageSize
			$scope.startFrom = () ->
				$('.product-img').popover()
				$scope.currentPage * $scope.pageSize + 3 # We used up the first three in the sub-featured items
			$scope.increment = () -> $scope.currentPage++
			$scope.deincrement = () -> $scope.currentPage--
			$scope.setCurrentPage = (number) ->
				$scope.currentPage = number

			# Shopping Cart

			$scope.lastRemoved = null
			$scope.purchases = [
				product: $scope.products.$child '-JBfLmlGwW9B3zNv-XH9'
				quantity: 2
			,
				product: $scope.products.$child '-JBfNWBiOqEuMdcYkgBG'
				quantity: 4
			,
				product: $scope.products.$child '-JBfPahaB9FomJej6cyu'
				quantity: 1
			]
			$scope.deletePurchase = (id) ->
				purchaseIndex = 0
				$.grep($scope.purchases, (e, i) -> purchaseIndex = i if e.product.id == id)
				$scope.lastRemoved = $scope.purchases[purchaseIndex]
				$scope.purchases.splice(purchaseIndex, 1)
			$scope.restorePurchase = (purchase) ->
				$scope.purchases.push(purchase)
				$scope.lastRemoved = null
			$scope.total = () ->
				return $scope.purchases.reduce(
					(a, b) ->
						return { quantity: a.quantity + (b.quantity * b.product.price)}
				, {quantity: 0}).quantity

	]