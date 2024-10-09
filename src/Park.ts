import { Car } from "./Car.js";
import { ILogPark } from "./ILogPark.js";
import { OfficialCar } from "./OfficialCar.js";
import { OfficialPark } from "./OfficialPark.js";
import { ParkLogEntry } from "./ParkLogEntry.js";
import { RegularCar } from "./RegularCar.js";
import { RegularPark } from "./RegularPark.js";
import { ResidentCar } from "./ResidentCar.js";
import { ResidentPark } from "./ResidentPark.js";

export class Park{
    #officialCars:OfficialCar[]=[];
    #residentCars:ResidentCar[]=[];
    #parkingLog: ParkLogEntry[]=[];

    get officialCars():OfficialCar[]{
        return this.#officialCars;
    }

    get residentCars():ResidentCar[]{
        return this.#residentCars;
    }

    get parkingLog():ParkLogEntry[]{
        return this.#parkingLog;
    }

    addOfficialCar(car:OfficialCar):void{
        this.#officialCars.push(car);
    }

    removeOfficialCar(car:OfficialCar):void{
        let targetCarIndex = this.#officialCars.map((car)=>{
            return car.plate}).indexOf(car.plate);
        if (targetCarIndex>=0) this.#officialCars.splice(targetCarIndex,1);
    }

    addResidentCar(car:ResidentCar):void{
        this.#residentCars.push(car);
    }

    removeResidentCar(car:ResidentCar):void{
        let targetCarIndex = this.#residentCars.map((car)=>{
            return car.plate}).indexOf(car.plate);
        if (targetCarIndex>=0) this.#residentCars.splice(targetCarIndex,1);
    }

    addParkingLogEntry(newEntry:ParkLogEntry):void{
        this.#parkingLog.push(newEntry);
    }

    removeParkingLogEntry(index:number):void{
        this.#parkingLog.splice(index,1);
    }

    removeOfficialEntriesOnLog(){
        let officialPlates = this.#officialCars.map((car)=>{return car.plate});
        this.#parkingLog.forEach((entry,index)=>{
            let targetCarIndex = officialPlates.indexOf(entry.car.plate);
            if (targetCarIndex>=0) this.#parkingLog.splice(index,1);
        })
    }

    getCarParked(plate:string):Car{
        let car: Car = new RegularCar(plate);
        let indexOfPlateInOfficialCarsList = this.#officialCars.map((car)=>{
            return car.plate}).indexOf(plate);
        if (indexOfPlateInOfficialCarsList!=-1) car = this.#officialCars[indexOfPlateInOfficialCarsList];
        let indexOfPlateInResidentCarsList = this.#residentCars.map((car)=>{
            return car.plate}).indexOf(plate);
        if (indexOfPlateInResidentCarsList!=-1) car = this.#residentCars[indexOfPlateInResidentCarsList];
        return car;
    }

    getNewPark(plate:string):ILogPark{
        let carPark: ILogPark = new RegularPark();
        let indexOfPlateInOfficialCarsList = this.#officialCars.map((car)=>{
            return car.plate}).indexOf(plate);
        if (indexOfPlateInOfficialCarsList!=-1) carPark = new OfficialPark();
        let indexOfPlateInResidentCarsList = this.#residentCars.map((car)=>{
            return car.plate}).indexOf(plate);
        if (indexOfPlateInResidentCarsList!=-1) carPark = new ResidentPark();
        return carPark;
    }

    getLastLogEntry(plate:string):ParkLogEntry{
        return this.#parkingLog.filter((entry)=>{
                     entry.car.plate == plate;})[length-1];
    }

}