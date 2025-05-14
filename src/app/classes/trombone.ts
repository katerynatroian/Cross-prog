import { Product } from "./product";

export class Trombone extends Product {
  private numberOfValves: number;

  constructor(id: string, name: string, price: number, brand: string, numberOfValves: number) {
    super(id, name, price, brand);
    if (numberOfValves < 1 || numberOfValves > 5) {
      throw new Error('Number of valves must be between 1 and 5');
    }
    this.numberOfValves = numberOfValves;
  }

  override getDetails(): string[] {
    let details = super.getDetails();
    details.push('Number of valves: ' + this.numberOfValves);
    return details;
  }

  getNumberOfValves(): number {
    return this.numberOfValves;
  }

  override getType(): string {
    return 'Trombone';
  }
}
