const Runway = require('./Runway');

describe('Runway class', () => {
  beforeAll(() => {
    runway = new Runway('001');
  });
  test(' max amount of planes allowed on runway is 100', () => {
    expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
  });

  test('Runway class initializes with a name', () => {
    expect(runway.name).toBe('001');
  });

  test('has a method to add new planes to plane property', () => {
    runway.add('Plane 1');
    runway.add('Plane 2');
    expect(Runway.planes.length).toBe(2);
  });

  test('returns an error if runway max capacity is exceeded', () => {
    expect(() => {
      let runway2 = new Runway('plane');
      Runway.planes.length = 101;
      return runway2.add('Plane');
    }).toThrowError('runways at full capacity!');
  });

  test('has a method to remove plane from plane property', () => {
    Runway.planes.length = 0;
    runway.add('Plane 1');
    runway.remove('Plane 1');
    expect(Runway.planes.length).toBe(0);
  });

  test('returns an error if attempt to remove plane when runway is empty', () => {
    expect(() => {
      runway.remove('Plane 1');
    }).toThrowError('No planes on the runway to remove!');
  });
});
