function productListViewModel() {
	var self = this
	this.products = ko.observableArray(allProducts)
  this.formattedPrice = ko.computed(function() {
    var price = self.products().price;
    return price ? "$" + price.toFixed(2) : "None";        
  });

	this.filterTerm = ko.observable();

	this.filteredItems = ko.computed(function() {
		var term = this.filterTerm()
		if (!term) { return this.products() }
		return ko.utils.arrayFilter(this.products(), function(item) {
			return item.title.indexOf(term) > -1; 
    });
	}, this)
}

ko.applyBindings(new productListViewModel())

