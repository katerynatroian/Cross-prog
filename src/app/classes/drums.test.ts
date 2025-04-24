import { Drums } from '../classes/drums';

describe('Drums class', () => {
    it('should create a Drums product with valid data', () => {
        const drums = new Drums(1, 'Yamaha', 3000,'Yamaha', 5);
        expect(drums.getType()).toBe('Drums');
        expect(drums.getNumberOfPieces()).toBe(5);
        expect(drums.getDetails()).toContain('Кількість барабанів: 5');
    });

    it('should throw an error for negative number of pieces', () => {
        expect(() => {
            new Drums(1, 'BadSet', 2000, 'NoName', -1);
        }).toThrow('number of pieces < 0');
    });
});
