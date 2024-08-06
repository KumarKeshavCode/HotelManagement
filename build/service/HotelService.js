"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hotel_1 = require("../model/Hotel");
function addHotels() {
    let hotels = [];
    let hotel1 = new Hotel_1.Hotel("Tulip", "2", 24);
    let hotel2 = new Hotel_1.Hotel("Tulip", "2", 24);
    let hotel3 = new Hotel_1.Hotel("Tulip", "2", 24);
    let hotel4 = new Hotel_1.Hotel("Tulip", "2", 24);
    let hotel5 = new Hotel_1.Hotel("Tulip", "2", 24);
    hotels.push(hotel1, hotel2, hotel3, hotel4, hotel5);
    console.log(hotels.length);
}
addHotels();
