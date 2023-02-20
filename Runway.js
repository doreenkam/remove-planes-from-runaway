class Runway {
  static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
  static planes = [];

  name;

  constructor(name) {
    this.name = name;
  }

  add(plane) {
    if (Runway.planes.length > Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
      throw new Error('runways at full capacity!');
    }
    Runway.planes.push(plane);
  }

  remove(plane) {
    const index = Runway.planes.indexOf(plane);
    if (index > -1) {
      Runway.planes.splice(index, 1);
    }
  }
}
