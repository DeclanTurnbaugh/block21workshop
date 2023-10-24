class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `The car is a ${this.make} ${this.model}, made in ${this.year}.`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return `This electric car is a ${this.make} ${this.model}, made in ${this.year}. Its range is ${this.range} miles!`;
  }
}

let Tesla = new ElectricCar("Tesla", "Model S", 2019, 300);

console.log(Tesla.getDescription());