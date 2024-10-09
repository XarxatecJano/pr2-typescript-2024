import { ILogPark } from "./ILogPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export class OfficialPark implements ILogPark{
    
    logParkingCheckin(newLogEntry:ParkLogEntry,park:Park):void{
        park.addParkingLogEntry(newLogEntry);
    }

    logParkingCheckout(newEntry: ParkLogEntry, park: Park): void {
        newEntry.checkOutDate = Date.now();
    }

}