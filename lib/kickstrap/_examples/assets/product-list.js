function productListViewModel() {
	this.products = ko.observableArray(productFormatter(allProducts))

	this.filterTerm = ko.observable()

	this.filteredItems = ko.computed(function() {
		var term = this.filterTerm()
		if (!term) { return this.products() }
		return ko.utils.arrayFilter(this.products(), function(item) {
			return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 
    });
	}, this)
}

function productFormatter(products) {
	for ( var i = 0; i < products.length; i ++ ) {
		products[i].price = ko.computed(function() {
        var price = products[i].price 
        return price ? "$" + price.toFixed(2) : "None";        
    });
	}
	return products
}

ko.applyBindings(new productListViewModel())