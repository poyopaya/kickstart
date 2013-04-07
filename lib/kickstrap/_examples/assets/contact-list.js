function contactListViewModel() {
	var self = this
	self.contacts = ko.observableArray(allContacts)

	self.filterTerm = ko.observable()
	self.currentContact = {
		img: ko.observable('notfound.png')
		, fName: ko.observable('Not')
		, lName: ko.observable('Found.')
		, email: ko.observable('n/a')
	}

	self.filteredItems = ko.computed(function() {
		var term = this.filterTerm()
		if (!term) { return this.contacts() }
		return ko.utils.arrayFilter(this.contacts(), function(item) {
			return (item.fName.toLowerCase().indexOf(term.toLowerCase()) > -1 || item.lName.toLowerCase().indexOf(term.toLowerCase()) > -1 )
    });
	}, this)

	this.showModal = function(row) {
	  self.currentContact.img(row.img)
	  self.currentContact.fName(row.fName)
	  self.currentContact.lName(row.lName)
	  self.currentContact.email(row.email)
	}
}

ko.applyBindings(new contactListViewModel())