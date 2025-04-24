import { Product } from "./product";
export class Guitars extends Product {
    private numbersOfStrings: number;
    constructor(
        id: number, 
        name: string, 
        price: number,
        brand: string,
        numbersOfStrings: number
    ) {
        super(id, name, price, brand);
        if (numbersOfStrings < 0) throw new Error('number of strings < 0');
        this.numbersOfStrings = numbersOfStrings;
    }
    override getDetails(): string[] {
        let details = [];
        details.push('Кількість струн: ' + this.numbersOfStrings);
        return details;
    }
    getnumbersOfStrings(): number {
        return this.numbersOfStrings;
    }
    override getType(): string {
        return 'Guitar';
    }
}