import { Trombone } from './trombone';

describe('Trombone Class', () => {
  it('should create an instance of Trombone with valid number of valves', () => {
    const trombone = new Trombone('1', 'Yamaha Trombone', 1500, 'Yamaha', 3);
    
    expect(trombone).toBeTruthy();
    expect(trombone.getNumberOfValves()).toBe(3);
    expect(trombone.getType()).toBe('Trombone');
  });

  it('should throw an error if number of valves is less than 1', () => {
    expect(() => new Trombone('1', 'Yamaha Trombone', 1500, 'Yamaha', 0)).toThrowError('Number of valves must be between 1 and 5');
  });

  it('should throw an error if number of valves is greater than 5', () => {
    expect(() => new Trombone('1', 'Yamaha Trombone', 1500, 'Yamaha', 6)).toThrowError('Number of valves must be between 1 and 5');
  });

  it('should return the correct details', () => {
    const trombone = new Trombone('1', 'Yamaha Trombone', 1500, 'Yamaha', 3);
    
    const details = trombone.getDetails();
    
    expect(details).toContain('Number of valves: 3');
  });
});
