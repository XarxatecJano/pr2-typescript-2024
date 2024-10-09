import { Car } from "./Car.js";
import { ILogPark } from "./ILogPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";
import { ResidentCar } from "./ResidentCar.js";

export class ResidentPark implements ILogPark{
    
    logParkingCheckin(newLogEntry:ParkLogEntry,park:Park):void{
        park.addParkingLogEntry(newLogEntry);
    }
    
    isResidentCar(car: Car): car is ResidentCar {
        return car instanceof ResidentCar;
    }
    
    logParkingCheckout(newEntry: ParkLogEntry, park: Park): void {
        newEntry.checkOutDate = Date.now();
        if (this.isResidentCar(newEntry.car)) {
            newEntry.car.addParkEntryTime(newEntry);
        } else {
            console.error("El coche no es de tipo ResidentCar");
        }
    }

}