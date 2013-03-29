// Class to represent a row in the seat reservations grijpgd
function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Book", price: 0, photo: 'http://upload.wikimedia.org/wikipedia/commons/1/14/Alte_Buecher.JPG' },
        { mealName: "Chess Set", price: 34.95, photo: 'http://upload.wikimedia.org/wikipedia/commons/f/f3/Staunton_chess_set.jpg' },
        { mealName: "Coffee", price: 15.00, photo: 'http://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg' }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation(self.availableMeals[2]),
        new SeatReservation(self.availableMeals[1])
    ]);

    // Operations
    self.addSeat = function() {
        self.seats.push(new SeatReservation(self.availableMeals[0]));
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }

    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++)
           total += self.seats()[i].meal().price;
       return total;
    });
}

function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";        
    });
}

ko.applyBindings(new ReservationsViewModel());
