//class for hotel.ts

export class Hotel{
    name: string;
    id: string;
    rooms: number;

    constructor(name: string, id: string , rooms: number){
        this.name = name;
        this.id = id;
        this.rooms = rooms;
    }
}