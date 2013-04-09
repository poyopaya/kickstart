// To get all thumbnails, set ID to 0

var getContactObjForId = function(id) {
   var contactObj
   for ( y in allContacts ) { 
      if ( allContacts[y].id == id) { 
         contactObj = allContacts[y]
      } 
   }
   return contactObj
}

var getThreadThumbnail = function (id) {
   var threadThumbnails = []
   var threadMessages = []
   var self = this
   self.id = id
   var contactId 
   // Get the thread by ID
   for ( x in allThreads ) { 
      if ( allThreads[x].threadId == id || id == 0 ) { 
         contactId = allThreads[x].messages[0].contactId 
         // TODO: Get last message, not first.
         // Getting just the last message for preview
         self.text = allThreads[x].messages[0].text
         self.subject = allThreads[x].subject
         self.messages = allThreads[x].messages
         // Now find the contact by the contact ID
         var contactObj = getContactObjForId(contactId) 
         self.fName = contactObj.fName
         self.lName = contactObj.lName
         self.img = contactObj.img
      } 
      threadThumbnails.push({
         subject: self.subject
         , name: self.fName + ' ' + self.lName
         , img: self.img
         , text: self.text
      })
      if ( id != 0 ) { // In which case, this would be wasteful
         for ( z in self.messages ) {
            var _contactObj = getContactObjForId(self.messages[z].contactId)
            threadMessages.push({
               name: _contactObj.fName + ' ' + _contactObj.lName
               , subject: self.subject
               , img: _contactObj.img
               , text: self.messages[z].text 
               , blah: 'blah'
            })
         }
         return threadMessages
      }
   }
   return threadThumbnails
}

var getAllMessagesForThread = function(threadId) {
   var messages = []

   return messages;
}

function messageListViewModel() {
	var self = this
   self.allThreads = ko.observableArray(getThreadThumbnail(0))
   self.filterTerm = ko.observable()
   self.filteredItems = ko.computed(function() {
      var term = this.filterTerm()
      if (!term) { return this.allThreads() }
      return ko.utils.arrayFilter(this.allThreads(), function(item) {
         return ( 
            item.subject.toLowerCase().indexOf(term.toLowerCase()) > -1 
            || item.text.toLowerCase().indexOf(term.toLowerCase()) > -1 
            || item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 
         )
      });
   }, this)

   this.showThread = function(row) {
     self.currentThread
   }
}

ko.applyBindings(new messageListViewModel())
