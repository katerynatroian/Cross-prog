import { Drums } from "./drums";
import { Guitars } from "./guitar";
import { Piano } from "./piano";
import { IProduct } from "../interface/IProduct";
import { productType } from "./productType";
export class ProductFactory {
    static createProduct(data: any): IProduct {
        switch (data.type) {
            case productType[0]:
                return new Drums(
                    data.id,
                    data.name,
                    data.price,
                    data.brand,
                    data.numberOfPieces);
            case productType[1]:
                return new Piano(
                    data.id,
                    data.name,
                    data.price,
                    data.brand,
                    data.numbersOfKeys);
            case productType[2]:
                return new Guitars(
                    data.id,
                    data.name,
                    data.price,
                    data.brand,
                    data.numbersOfStrings);
            default:
                throw new Error(`Unknown product type: ${data.type}`);
        }
    }
}