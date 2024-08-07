"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
var Hotel_1 = require("../model/Hotel");
var HotelService = /** @class */ (function () {
    function HotelService() {
        this.hotels = [];
    }
    HotelService.prototype.addHotel = function (hotel) {
        this.hotels.push(hotel);
    };
    HotelService.prototype.displayHotels = function () {
        console.log('List of Hotels:');
        this.hotels.forEach(function (hotel) {
            console.log("Hotel ID: ".concat(hotel.id, ", Name: ").concat(hotel.name, ", Rooms: ").concat(hotel.rooms));
        });
    };
    HotelService.prototype.bookHotel = function (hotelId, date) {
        var hotel = this.hotels.find(function (h) { return h.id === hotelId; });
        if (hotel) {
            console.log("Booking hotel ".concat(hotel.name, " on ").concat(date));
            // Add your booking logic here
        }
        else {
            console.log("Hotel with ID ".concat(hotelId, " not found."));
        }
    };
    return HotelService;
}());
exports.HotelService = HotelService;
// Example usage
var hotel1 = new Hotel_1.Hotel('Hotel A', '1', 50);
var hotel2 = new Hotel_1.Hotel('Hotel B', '2', 30);
var hotelService = new HotelService();
hotelService.addHotel(hotel1);
hotelService.addHotel(hotel2);
hotelService.displayHotels();
hotelService.bookHotel('1', '2023-01-10');
/*

function addHotels(): void {

    let hotels =[];

let hotel1= new Hotel("Tulip" ,"2",24);
let hotel2= new Hotel("Tulip" ,"2",24);
let hotel3= new Hotel("Tulip" ,"2",24);
let hotel4= new Hotel("Tulip" ,"2",24);
let hotel5= new Hotel("Tulip" ,"2",24);


    hotels.push(hotel1, hotel2, hotel3, hotel4, hotel5);
    console.log(hotels.length);

}


*/
