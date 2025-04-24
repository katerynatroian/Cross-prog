export interface IProduct {
    getId(): number;
    getName(): string;
    getPrice(): number;
    getDetails(): string [];
    getType(): string;
    getBrand(): string;
}