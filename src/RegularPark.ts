import { Car } from "./Car.js";
import { ILogPark } from "./ILogPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export class RegularPark implements ILogPark{
    
    logParkingCheckin(newLogEntry:ParkLogEntry,park:Park):void{
        park.addParkingLogEntry(newLogEntry);
    }

    generateReceipt(entry: ParkLogEntry):string{
        let timeParked:number = entry.getTimeParked();
        return `Duración de la estancia: ${timeParked}\nTotal a pagar: ${timeParked*0.02}€`
    }

    logParkingCheckout(entry: ParkLogEntry, park: Park): void {
        entry.checkOutDate = Date.now()
        console.log(this.generateReceipt(entry));
    }

}