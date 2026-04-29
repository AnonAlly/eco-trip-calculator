import calculatorService from './calculatorService.js';

interface CompareInput {
  distance: number;
  transport: string;
  carType?: string;
  passengers?: number;
  country?: string;
}

interface CompareResult {
  trip1: { co2: number; label: string };
  trip2: { co2: number; label: string };
  winner: 'trip1' | 'trip2' | 'equal';
  difference: number;
}

class CompareService {
  compare(trip1: CompareInput, trip2: CompareInput): CompareResult {
    const r1 = this._getCalculation(trip1);
    const r2 = this._getCalculation(trip2);

    let winner: 'trip1' | 'trip2' | 'equal';

    if (r1.co2 < r2.co2) {
      winner = 'trip1';
    } else if (r2.co2 < r1.co2) {
      winner = 'trip2';
    } else {
      winner = 'equal';
    }

    return {
      trip1: { co2: r1.co2, label: r1.label },
      trip2: { co2: r2.co2, label: r2.label },
      winner,
      difference: Math.abs(r1.co2 - r2.co2)
    };
  }

  private _getCalculation(t: CompareInput) {
    return calculatorService.calculate(
      t.distance,
      t.transport,
      t.carType,
      t.passengers,
      t.country
    );
  }
}

export default new CompareService();