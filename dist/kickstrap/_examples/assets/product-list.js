var sortFunction = function(a, b) {
   return a.title < b.title ? -1 : 1;
}
function productListViewModel() {
	this.products = ko.observableArray(allProducts)
	this.filterTerm = ko.observable()

	this.filteredItems = ko.computed(function() {
		var term = this.filterTerm()
		if (!term) { return this.products.sort(sortFunction) }
		return ko.utils.arrayFilter(this.products(), function(item) {
			return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 
      }).sort();
	}, this)
} 

ko.applyBindings(new productListViewModel())
