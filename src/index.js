class Car {
  constructor() {
    console.log("this is a car");
  }
}

class Ferrari extends Car {
  drive() {
    console.log("wruuu");
  }
}

class Jelcz extends Car {
  drive() {
    console.log("grrr");
  }
}

module.exports = {
  Ferrari,
  Jelcz,
};
