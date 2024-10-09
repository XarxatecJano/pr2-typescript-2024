import { Car } from "./Car.js";
import { ILogPark } from "./ILogPark.js";
import { OfficialCar } from "./OfficialCar.js";
import { OfficialPark } from "./OfficialPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";
import { RegularCar } from "./RegularCar.js";
import { RegularPark } from "./RegularPark.js";
import { ResidentCar } from "./ResidentCar.js";
import { ResidentPark } from "./ResidentPark.js";

const parking = new Park();

document.querySelector("#newParkLogEntryButton")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que entra en el parking");
    const plate:string = promptResponse?promptResponse:"";
    
    let car: Car = parking.getCarParked(plate);
    
    let newParkEntry = new ParkLogEntry(car);
    parking.addParkingLogEntry(newParkEntry);

    console.log(parking);
});

document.querySelector("#newCheckoutButton")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que sale del parking");
    const plate:string = promptResponse?promptResponse:"";

    let carPark:ILogPark = parking.getNewPark(plate)
    let lastEntry: ParkLogEntry = parking.getLastLogEntry(plate);

    carPark.logParkingCheckout(lastEntry,parking);

    console.log(parking);

});

document.querySelector("#newOfficialCarEntryButton")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche oficial que entra");
    const plate:string = promptResponse?promptResponse:"";
    let newOfficialCar = new OfficialCar(plate);
    parking.addOfficialCar(newOfficialCar);
});

document.querySelector("#newResidentCarEntryButton")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche residente que entra");
    const plate:string = promptResponse?promptResponse:"";
    let newResidentCar = new ResidentCar(plate);
    parking.addResidentCar(newResidentCar);
});

document.querySelector("#newMonthButton")!.addEventListener("click", ()=>{
    parking.removeOfficialEntriesOnLog();
    parking.residentCars.forEach((car)=>{
        car.lastMonthTotalMinutesParked=0;
    });
});