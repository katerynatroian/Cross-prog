import { IProduct } from "../interface/IProduct";
export abstract class Product implements IProduct {
    private id: number = 0;
    private name: string = '';
    private price: number = 1;
    private brand: string = '';
    constructor(
        id: number, 
        name: string, 
        price: number,
        brand: string
    ) {
        if (id < 0) throw new Error('id < 0');
        if (price < 1) throw new Error('price < 1');
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    getPrice(): number {
        return this.price;
    }
    getName(): string {
        return this.name;
    }
    getDetails(): string[] {
        return [];
    }
    getType(): string {
        return 'Product';
    }
    getId(): number {
        return this.id;
    }
    getBrand(): string {
        return this.brand;
    }
}