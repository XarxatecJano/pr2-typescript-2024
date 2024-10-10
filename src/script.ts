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
import * as fs from "fs";

const parking = new Park();

document.querySelector("#newParkLogEntryButton")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que entra en el parking");
    const plate:string = promptResponse?promptResponse:"";
    let car: Car = parking.getCarParked(plate);
    let newParkEntry = new ParkLogEntry(car);
    parking.addParkingLogEntry(newParkEntry);
});

document.querySelector("#newCheckoutButton")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que sale del parking");
    const plate:string = promptResponse?promptResponse:"";
    console.log(plate);
    let carPark:ILogPark = parking.getNewPark(plate);
    console.log(carPark);
    let lastEntry: ParkLogEntry = parking.getLastLogEntry(plate);
    console.log(lastEntry);
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


document.querySelector("#incomeReportButton")!.addEventListener("click", ()=>{
    let data = "Matrícula           Tiempo estacionado             Importe\n";
    parking.residentCars.forEach((car)=>{
        data+=`${car.plate}             ${car.lastMonthTotalMinutesParked}             ${(car.lastMonthTotalMinutesParked*0.002).toFixed(2)}€\n`;
    });
    console.log(data);
});