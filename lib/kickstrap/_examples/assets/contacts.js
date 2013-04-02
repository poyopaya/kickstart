var allContacts = [
	{ 
		img: '8/86/Charlotte_Bronte_coloured_drawing.png'
		, fName: 'Charlotte'
		, lName: 'Bronte'
		, email: 'c.bronte@slampoets.jam' 
	}
	,{ 
		img: '8/85/Dantealighieri.PNG'
		, fName: 'Dante'
		, lName: 'Alighieri'
		, email: 'd.alighieri@gmail.com' 
	}
	,{ 
		img: '8/87/Dolley-madison.jpg'
		, fName: 'Dolley'
		, lName: 'Madison'
		, email: 'd.madison@gmail.com' 
	}
	,{ 
		img: '4/44/Washington_Irving.jpg'
		, fName: 'Washington'
		, lName: 'Irving'
		, email: 'w.irving@yahoo.com' 
	}
	,{ 
		img: 'd/d4/Jane_Austen_coloured_version.jpg'
		, fName: 'Jane'
		, lName: 'Austen'
		, email: 'j.austen@myfreeemailaccount.ru'
	}
	,{ 
		img: 'b/b4/Hw-shakespeare.jpg'
		, fName: 'William'
		, lName: 'Shakespeare'
		, email: 'w.shakespeare@googlemail.co.uk'
	}
]

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