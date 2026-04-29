abstract class TransportCalculator {
  protected getLabel(co2: number): string {
    if (co2 < 5) return 'GREEN';
    if (co2 >= 5 && co2 < 15) return 'ORANGE';
    return 'RED';
  }

  abstract calculate(d: number, params: { ct?: string, p?: number, c?: string }): { co2: number, label: string };
}

class CarCalculator extends TransportCalculator {
  calculate(d: number, { ct, p, c }: any) {
    let result = 0;
    if (ct === 'thermal') {
      result = d * 0.192;
    } else if (ct === 'electric') {
      const grid: Record<string, number> = { 'France': 0.012, 'Germany': 0.045, 'Poland': 0.078 };
      result = d * (grid[c] || 0.04);
    } else if (ct === 'hybrid') {
      result = d * 0.098;
    }

    if (p > 0) result = result / p;
    return { co2: result, label: this.getLabel(result) };
  }
}

class TrainCalculator extends TransportCalculator {
  calculate(d: number, { c }: any) {
    const grid: Record<string, number> = { 'France': 0.0032, 'Germany': 0.032, 'Poland': 0.069, 'Norway': 0.001 };
    const result = d * (grid[c] || 0.041);
    return { co2: result, label: this.getLabel(result) };
  }
}

class SimpleCalculator extends TransportCalculator {
  constructor(private factor: number) { super(); }
  calculate(d: number) {
    const result = d * this.factor;
    return { co2: result, label: this.getLabel(result) };
  }
}

class CalculatorService {
  private strategies: Record<string, TransportCalculator> = {
    car: new CarCalculator(),
    train: new TrainCalculator(),
    bus: new SimpleCalculator(0.104),
    bike: new SimpleCalculator(0),
    walk: new SimpleCalculator(0)
  };

  calculate(d: any, t: any, ct: any, p: any, c: any): any {
    const strategy = this.strategies[t];
    
    if (!strategy) {
      throw new Error(`Transport type ${t} not supported`);
    }

    return strategy.calculate(d, { ct, p, c });
  }
}

export default new CalculatorService();