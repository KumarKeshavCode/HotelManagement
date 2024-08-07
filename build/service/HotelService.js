"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
class HotelService {
    constructor() {
        this.hotels = [];
        // bookHotel(hotelId: string): void {
        //     const hotel = this.hotels.find((h) => h.id === hotelId);
        //     if (hotel) {
        //         console.log(`Booking hotel ${hotel.name} on ${id}`);
        //         // Add your booking logic here
        //     } else {
        //         console.log(`Hotel with ID ${hotelId} not found.`);
        //     }
        // }
    }
    addHotel(hotel) {
        this.hotels.push(hotel);
        console.log(this.hotels);
    }
    displayHotels() {
        //console.log(this.hotels);
        console.log('List of Hotels:');
        // console.log(this.hotels);
        this.hotels.forEach((hotel) => {
            // console.log(hotel);
            console.log(`Hotel ID: ${hotel.id}, Name: ${hotel.name}, Rooms: ${hotel.rooms}`);
        });
    }
    bookHotel(hotelId) {
        const hotel = this.hotels.find((h) => h.id === hotelId);
        if (hotel) {
            if (hotel.rooms > 0) {
                console.log(`Booking hotel ${hotel.name}`);
                // Add your booking logic here
                hotel.rooms--;
            }
            else {
                console.log(`Hotel ${hotel.name} is fully booked.`);
            }
        }
        else {
            console.log(`Hotel with ID ${hotelId} not found.`);
        }
    }
}
exports.HotelService = HotelService;
/*
// Example usage
const hotel1 = new Hotel('Hotel A', '1', 50);
const hotel2 = new Hotel('Hotel B', '2', 30);

const hotelService = new HotelService();
hotelService.addHotel(hotel1);
hotelService.addHotel(hotel2);

hotelService.displayHotels();
hotelService.bookHotel('1', '2023-01-10');

*/
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
