//var read = require('./node_modules/readline-sync');

var read = require('readline-sync');
import{Hotel} from './model/Hotel'

import{HotelService} from './service/HotelService'

/*
import {addHotel} from './src/service/addhotel'
import {showHotels} from './src/service/addhotel'
console.log("Welcome to hotel management application");
*/ 
let flag=true
while(flag==true){
    console.log("1: Add new hotel")
    console.log("2: Display Hotels")
    let i=read.question("enter your choice")
    switch(i){
        
        case '1':{
            let name=read.question("enter hotel name: ");
            let id=read.question("enter hotel id : ");
            let rooms=read.question("enter hotel location : ");
       console.log(name ,id, rooms);
            let h1=new Hotel(name,id,rooms);
            let hotelService = new HotelService(); // Create an instance of HotelService
            hotelService.addHotel(h1);
            break;
        }
        case '2':{
            console.log("aaya");
            let hotelService = new HotelService();
            hotelService.displayHotels();
            break;

        }
        default:{
            flag=false;
            break;
        }
    }
}

