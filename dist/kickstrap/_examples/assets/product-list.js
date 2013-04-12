function productListViewModel() {
	this.products = ko.observableArray(allProducts)
	this.filterTerm = ko.observable()

	this.filteredItems = ko.computed(function() {
		var term = this.filterTerm()
		if (!term) { return this.products() }
		return ko.utils.arrayFilter(this.products(), function(item) {
			return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 
      });
	}, this)
} 

ko.applyBindings(new productListViewModel())
