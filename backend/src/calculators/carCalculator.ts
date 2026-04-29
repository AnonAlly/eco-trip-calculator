import { Calculator } from "./calculator";

export class CarCalculator implements Calculator {

    calculate(distance: number, transport: string, carType: string, passengers: number, country: string): number {
        var result = 0;
        if (carType === 'thermal') {
        result = distance * 0.192;
        } else if (carType === 'electric') {
        if (country === 'France') {
            result = distance * 0.012;
        } else if (country === 'Germany') {
            result = distance * 0.045;
        } else if (country === 'Poland') {
            result = distance * 0.078;
        } else {
            result = distance * 0.04;
        }
        } else if (carType === 'hybrid') {
        result = distance * 0.098;
        }

        if (passengers > 0) {
        result = result / passengers;
        }

        return result;
    }

}