interface Trip {
  id: number;
  co2: number;
  timestamp: Date;
  [key: string]: any;
}

export abstract class HistoryService {
  protected data: Trip[] = [];
  private counter: number = 0;

  getAll(): Trip[] {
    return this.data;
  }

  getStats() {
    const total = this.data.reduce((sum, trip) => sum + (trip.co2 || 0), 0);
    const count = this.data.length;

    return {
      totalTrips: count,
      totalCO2: total,
      averageCO2: count > 0 ? total / count : 0,
      lastCalculation: count > 0 ? this.data[count - 1].timestamp : null
    };
  }

  clear(): void {
    this.data = [];
    this.counter = 0;
  }

  abstract addTrip(tripData: Omit<Trip, 'id' | 'timestamp'>): Trip;

  protected createTripObject(tripData: any): Trip {
    this.counter++;
    return {
      id: this.counter,
      ...tripData,
      timestamp: new Date()
    };
  }
}