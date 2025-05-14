export interface IProduct {
    getId(): string;
    getName(): string;
    getPrice(): number;
    getDetails(): string [];
    getType(): string;
    getBrand(): string;
}