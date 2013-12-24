define ['./module'], (controllers) ->
	controllers.controller 'ProductsCtrl', ['$scope', '$firebase', ($scope, $firebase) ->
		$scope.featuredProducts = []
		$scope.products = $firebase new Firebase "https://#{k$.settings.firebaseName}.firebaseio.com/products/"
		$scope.products.$on 'loaded', () ->

			# Pagination

			$scope.genericItems = $scope.products # Loosely-couples with pagination include
			$scope.currentPage = 0
			$scope.pageSize = 10
			$scope.numPages = () ->
				Math.ceil $scope.genericItems.length/$scope.pageSize
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
				product: $scope.products.$child 2
				quantity: 2
			,
				product: $scope.products.$child 12
				quantity: 4
			,
				product: $scope.products.$child 19
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