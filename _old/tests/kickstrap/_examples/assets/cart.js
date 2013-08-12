// http://jsfiddle.net/rniemeyer/adNuR/
// Overall viewmodel for this screen, along with initial state
function CartViewModel() {
    var self = this;

    self.products = allProducts

    self.items = ko.observableArray([
        new productDetails(self.products[2]),
        new productDetails(self.products[1])
    ]);

    // Operations
    self.addItem = function() {
        self.items.push(new productDetails(self.products[0]));
    }
    self.removeItem = function(item) { self.items.remove(item) }

    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.items().length; i++)
           total += self.items()[i].productPrice();
       return total;
    });
}

function productDetails(initialProduct) {
    var self = this;
    self.quantity = ko.observable(1)
    self.product = ko.observable(initialProduct); 
    self.productPrice = ko.computed(function() {
      return self.product().price.toFixed(2) * parseInt("0" + self.quantity(), 10)
    })
    self.formattedPrice = ko.computed(function() {
        return self.product().price ? "$" + self.productPrice() : "None";        
    });
}

ko.applyBindings(new CartViewModel());
