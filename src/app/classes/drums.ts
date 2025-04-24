import { Product } from "./product";
export class Drums extends Product {
    private numberOfPieces: number;
    constructor(
        id: number, 
        name: string, 
        price: number,
        brand: string,
        numberOfPieces: number
    ) {
        super(id, name, price, brand);
        if (numberOfPieces < 0) throw new Error('number of pieces < 0');
        this.numberOfPieces = numberOfPieces;
    }
    override getDetails(): string[] {
        let details = [];
        details.push('Кількість барабанів: ' + this.numberOfPieces);
        return details;
    }
    getNumberOfPieces(): number {
        return this.numberOfPieces;
    }
    override getType(): string {
        return 'Drums';
    }
}