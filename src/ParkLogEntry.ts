import { Car } from "./Car";

export class ParkLogEntry {
    #car: Car;
    #checkInDate: Date;
    #checkOutDate?: Date;

    constructor(car:Car){
        this.#car = car;
        this.#checkInDate = new Date(Date.now());
    }

    get car():Car{
        return this.#car;
    }

    get checkInDate():Date{
        return this.#checkInDate;
    }

    get checkOutDate():Date{
        return this.#checkOutDate?this.#checkOutDate:new Date(Date.now());
    }

    set checkOutDate(now:number){
        this.#checkOutDate = new Date(now);
    }


    getTimeParked():number{
        let time=0;
        if (this.#checkOutDate && this.checkInDate) time=Math.round(((this.#checkOutDate.getTime() - this.checkInDate.getTime())/(1000*60))*100)/100;
        return time;
    }

    print():string{
        return `${this.#car.plate}     ${this.#checkInDate}       ${this.#checkOutDate}`;
    }
}