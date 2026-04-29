class CalculatorService {
  calculate(distance: any, transport: any, carType: any, passengers: any, country: any): any {
    var result = 0;
    var lbl = '';

    if (transport === 'bike' || transport === 'walk') {
      result = 0;
      lbl = 'GREEN';
    } else if (transport === 'car') {
      result = this._calculateCar(distance, carType, passengers, country);
      lbl = this._getLabel(result);
    } else if (transport === 'train') {
      result = this._calculateTrain(distance, country);
      lbl = this._getLabel(result);
    } else if (transport === 'bus') {
      result = distance * 0.104;
      lbl = this._getLabel(result);
    }

    return { co2: result, label: lbl };
  }

  _calculateCar(distance: any, carType: any, passengers: any, country: any): number {
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

  _calculateTrain(d: any, c: any): number {
    var result = 0;
    if (c === 'France') {
      result = d * 0.0032;
    } else if (c === 'Germany') {
      result = d * 0.032;
    } else if (c === 'Poland') {
      result = d * 0.069;
    } else if (c === 'Norway') {
      result = d * 0.001;
    } else {
      result = d * 0.041;
    }
    return result;
  }

  _getLabel(result: number): string {
    if (result < 5) return 'GREEN';
    if (result >= 5 && result < 15) return 'ORANGE';
    return 'RED';
  }
}

export default new CalculatorService();
