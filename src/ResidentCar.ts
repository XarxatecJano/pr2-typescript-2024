import { Car } from "./Car.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export class ResidentCar extends Car{
    
    #type:string = "Resident";
    #lastMonthTotalMinutesParked:number = 0;

    get type():string{
        return this.#type;
     }
    

    get lastMonthTotalMinutesParked():number{
        return this.#lastMonthTotalMinutesParked;
    }

    set lastMonthTotalMinutesParked(time:number){
        this.#lastMonthTotalMinutesParked = time;
    }

    addParkEntryTime(parkEntry: ParkLogEntry){
        this.#lastMonthTotalMinutesParked += parkEntry.getTimeParked();
    }
}