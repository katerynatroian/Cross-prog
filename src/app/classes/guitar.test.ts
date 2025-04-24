import { Guitars } from '../classes/guitar';

describe('Guitars class', () => {
    it('should create a Guitar product with valid data', () => {
        const guitar = new Guitars(3, 'Fender', 2500, 'Fender', 6);
        expect(guitar.getType()).toBe('Guitar');
        expect(guitar.getnumbersOfStrings()).toBe(6);
        expect(guitar.getDetails()).toContain('Кількість струн: 6');
    });

    it('should throw an error for negative number of strings', () => {
        expect(() => {
            new Guitars(3, 'BadGuitar', 1500, 'NoName', -2);
        }).toThrow('number of strings < 0');
    });
});
