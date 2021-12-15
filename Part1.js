console.clear();
class Jungle {
  constructor(name) {
    this.name = name;
  }
  soundOff() {
    return this;
  }
}
class Animal extends Jungle {
  constructor(name) {
    super();
    this.name = name;
  }
  makeSound() {
    if (this instanceof Monkey) {
      this.energyLevel -= 4;
    } else {
      this.energyLevel -= 1;
    }

    return `${this.name} made a sound!`;
  }
  eatFood() {
    if (this instanceof Monkey) {
      this.energyLevel += 2;
    } else {
      this.energyLevel += 5;
    }
    return `${this.name} made a sound!`;
  }
  sleep() {
    if (this instanceof Tiger) {
      this.energyLevel += 5;
    } else {
      this.energyLevel += 10;
    }
    return `${this.name} is slepping!`;
  }
}
class Monkey extends Animal {
  constructor(name, energyLevel) {
    super();
    Monkey.MonkeyCount = (Monkey.MonkeyCount || 0) + 1;
    this.name = name;
    this.energyLevel = energyLevel;
    this.foods = ["Grain", "Fish", "Meat", "Bug"];
  }
  getCount() {
    return Monkey.MonkeyCount;
  }
  play() {
    if (this.energyLevel < 8) {
      return `Monkey is too tired!`;
    } else {
      this.energyLevel -= 8;
      return `Oooo Oooo Oooo`;
    }
  }
}
class Tiger extends Animal {
  constructor(name, energyLevel) {
    super();
    Tiger.TigerCount = (Tiger.TigerCount || 0) + 1;
    this.name = name;
    this.energyLevel = energyLevel;
    this.foods = ["Fish", "Meat"];
  }
  getCount() {
    return Tiger.TigerCount;
  }
}
class Snake extends Animal {
  constructor(name, energyLevel) {
    super();
    Snake.SnakeCount = (Snake.SnakeCount || 0) + 1;
    this.name = name;
    this.energyLevel = energyLevel;
    this.foods = ["Fish", "Meat"];
  }
  getCount() {
    return Snake.SnakeCount;
  }
}
const j = new Monkey("Silas", 10);
