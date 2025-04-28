import { ProductFactory } from '../classes/productFactory';
import { IProduct } from './IProduct';

describe('ProductFactory', () => {
    it('should create a Drums product from valid data', () => {
        const product: IProduct = ProductFactory.createProduct({
            type: 'Drums',
            id: 1,
            name: 'Rock Drums',
            price: 3000,
            brand: 'Yamaha',
            numberOfPieces: 4,
        });
        expect(product.getType()).toBe('Drums');
    });

    it('should create a Piano product from valid data', () => {
        const product: IProduct = ProductFactory.createProduct({
            type: 'Piano',
            id: 2,
            name: 'Grand Piano',
            price: 8000,
            brand: 'Kawai',
            numbersOfKeys: 88,
        });
        expect(product.getType()).toBe('Piano');
    });

    it('should create a Guitar product from valid data', () => {
        const product: IProduct = ProductFactory.createProduct({
            type: 'Guitar',
            id: 3,
            name: 'Electric Guitar',
            price: 2000,
            brand: 'Fender',
            numbersOfStrings: 6,
        });
        expect(product.getType()).toBe('Guitar');
    });

    it('should throw error for unknown product type', () => {
        expect(() => {
            ProductFactory.createProduct({
                type: 'Flute',
                id: 4,
                name: 'Flutey',
                price: 1000,
                brand: 'Yamaha',
                extra: 0,
            });
        }).toThrow('Unknown product type: Flute');
    });
});
