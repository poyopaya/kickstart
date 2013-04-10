function contactListViewModel() {
	var self = this
	self.contacts = ko.observableArray(allContacts)

	self.filterTerm = ko.observable()
	self.currentContact = {
		img: ko.observable('8/86/Charlotte_Bronte_coloured_drawing.png')
		, fName: ko.observable('Charlotte')
		, lName: ko.observable('Bronte')
		, email: ko.observable('c.bronte@slampoets.jam')
		, bio: ko.observable('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
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
      self.currentContact.bio(row.bio)
	}
}

ko.applyBindings(new contactListViewModel())
