import { Piano } from '../classes/piano';

describe('Piano class', () => {
    it('should create a Piano product with valid data', () => {
        const piano = new Piano('2', 'Casio', 5000, 'Casio', 88);
        expect(piano.getType()).toBe('Piano');
        expect(piano.getDetails()).toContain('Кількість клавіш: 88');
    });

    it('should throw an error for negative number of keys', () => {
        expect(() => {
            new Piano('2', 'BadPiano', 4000, 'NoName', -10);
        }).toThrow('number of keys < 0');
    });
});
