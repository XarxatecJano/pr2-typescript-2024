import { OfficialCar } from "./OfficialCar.js";
import { OfficialPark } from "./OfficialPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";
import { RegularCar } from "./RegularCar.js";
import { RegularPark } from "./RegularPark.js";

const parking = new Park();

document.querySelector("#newOfficialCarEntry")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que quieres crear");
    const plate:string = promptResponse?promptResponse:"";
    let newOfficialCar = new OfficialCar(plate);
    parking.addOfficialCar(newOfficialCar);
    console.log(parking);
} )


/*const parking = new Park();
const car1 = new RegularCar("7929-KVD");
const car2 = new OfficialCar("3344-ZDB");
parking.addOfficialCar(car2);
const parkLogEntry1 = new ParkLogEntry(car1.plate);
const parkLogEntry2 = new ParkLogEntry(car2.plate);
const regularPark1 = new RegularPark();
regularPark1.logParkingCheckin(parkLogEntry1, parking);
const OfficialPark1 = new OfficialPark();
OfficialPark1.logParkingCheckin(parkLogEntry2, parking);
parkLogEntry2.checkOutDate = Date.now();
console.log(parkLogEntry1.print());
console.log(parkLogEntry2.print());
console.log(parking);*/
