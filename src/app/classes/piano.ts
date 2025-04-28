import { Product } from "./product";
export class Piano extends Product {
    private numbersOfKeys: number;
    constructor(
        id: number, 
        name: string, 
        price: number,
        brand: string,
        numbersOfKeys: number
    ) {
        super(id, name, price, brand);
        if (numbersOfKeys < 0) throw new Error('number of keys < 0');
        this.numbersOfKeys = numbersOfKeys;
    }
    override getDetails(): string[] {
        let details = [];
        details.push('Кількість клавіш: ' + this.numbersOfKeys);
        return details;
    }
    getnumbersOfStrings(): number {
        return this.numbersOfKeys;
    }
    override getType(): string {
        return 'Piano';
    }
}  