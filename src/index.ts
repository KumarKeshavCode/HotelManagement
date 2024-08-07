//var read = require('./node_modules/readline-sync');

var read = require('readline-sync');
import{Hotel} from './model/Hotel'

import{HotelService} from './service/HotelService'

let hotelService = new HotelService();

/*
import {addHotel} from './src/service/addhotel'
import {showHotels} from './src/service/addhotel'
console.log("Welcome to hotel management application");
*/ 
let flag=true
while(flag==true){
    console.log("1: Add new hotel")
    console.log("2: Display Hotels")
    console.log("3: Book  Hotels")

    let i=read.question("enter your choice")
   
    switch(i){
        
        case '1':{
            let name=read.question("enter hotel name: ");
            let id=read.question("enter hotel id : ");
            let rooms=read.question("enter number of room available : ");
      // console.log(name ,id, rooms);
            let h1=new Hotel(name,id,rooms);
            // Create an instance of HotelService
            hotelService.addHotel(h1);
            break;
        }
        case '2':{
            console.log("aaya");
           // let hotelService = new HotelService();
            hotelService.displayHotels();
            break;

        }
        case '3' :{
            hotelService.displayHotels();
            let id=read.question("enter your hotel id")
            hotelService.bookHotel(id);
            break;
        }
        default:{
            flag=false;
            break;
        }
    }
}

