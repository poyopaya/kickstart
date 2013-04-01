// Overall viewmodel for this screen, along with initial state
function CartViewModel() {
    var self = this;

    self.products = allProducts

    self.items = ko.observableArray([
        new ItemReservation(self.products[2]),
        new ItemReservation(self.products[1])
    ]);

    // Operations
    self.addItem = function() {
        self.items.push(new ItemReservation(self.products[0]));
    }
    self.removeItem = function(items) { self.items.remove(Item) }

    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.items().length; i++)
           total += self.items()[i].product().price;
       return total;
    });
}

function ItemReservation(initialProduct) {
    var self = this;
    self.product = ko.observable(initialProduct);

    self.formattedPrice = ko.computed(function() {
        var price = self.product().price;
        return price ? "$" + price.toFixed(2) : "None";        
    });
}

ko.applyBindings(new CartViewModel());
