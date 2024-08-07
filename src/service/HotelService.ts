import {Hotel} from '../model/Hotel';


export class HotelService {
   public hotels: Hotel[] = [];

    addHotel(hotel: Hotel): void {
        this.hotels.push(hotel);
        console.log(this.hotels);
    }
     
    displayHotels(): void {
        console.log('List of Hotels:');
        
        this.hotels.forEach((hotel) => {
            console.log(this.hotel);
            console.log(`Hotel ID: ${hotel.id}, Name: ${hotel.name}, Rooms: ${hotel.rooms}`);
        });
    }

    bookHotel(hotelId: string, date: string): void {
        const hotel = this.hotels.find((h) => h.id === hotelId);
        if (hotel) {
            console.log(`Booking hotel ${hotel.name} on ${date}`);
            // Add your booking logic here
        } else {
            console.log(`Hotel with ID ${hotelId} not found.`);
        }
    }

   
}


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
