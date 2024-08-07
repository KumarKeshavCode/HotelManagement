"use strict";
//var read = require('./node_modules/readline-sync');
Object.defineProperty(exports, "__esModule", { value: true });
var read = require('readline-sync');
const Hotel_1 = require("./model/Hotel");
const HotelService_1 = require("./service/HotelService");
/*
import {addHotel} from './src/service/addhotel'
import {showHotels} from './src/service/addhotel'
console.log("Welcome to hotel management application");
*/
let flag = true;
while (flag == true) {
    console.log("1: Add new hotel");
    console.log("2: Display Hotels");
    let i = read.question("enter your choice");
    switch (i) {
        case '1': {
            let name = read.question("enter hotel name: ");
            let id = read.question("enter hotel id : ");
            let rooms = read.question("enter hotel location : ");
            console.log(name, id, rooms);
            let h1 = new Hotel_1.Hotel(name, id, rooms);
            let hotelService = new HotelService_1.HotelService(); // Create an instance of HotelService
            hotelService.addHotel(h1);
            break;
        }
        case '2': {
            console.log("aaya");
            let hotelService = new HotelService_1.HotelService();
            hotelService.displayHotels();
            break;
        }
        default: {
            flag = false;
            break;
        }
    }
}
