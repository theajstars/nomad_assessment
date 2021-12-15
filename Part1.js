console.clear();
const TotalAnimals = [];
class Jungle {
  constructor(name) {
    this.name = name;
    if (this instanceof Animal) {
      TotalAnimals.push(this);
    }
  }
  soundOff() {
    console.log(TotalAnimals);
    TotalAnimals.map((thisAnimal) => {
      if (thisAnimal instanceof Monkey) {
        //Check if the monkey has enough energy to make a sound
        if (thisAnimal.energyLevel < 4) {
          //Monkey cannot make a sound
        } else {
          console.log(
            thisAnimal.makeSound(),
            "Energy remaining: ",
            thisAnimal.energyLevel
          );
        }
      } else {
        //Check if other animals can make sound
        if (thisAnimal.energyLevel < 3) {
          //Animal cannot make sound
        } else {
          console.log(
            thisAnimal.makeSound(),
            "Energy remaining: ",
            thisAnimal.energyLevel
          );
        }
      }
    });
  }
}
class Animal extends Jungle {
  constructor(name) {
    super();
    this.name = name;
  }
  makeSound() {
    if (this instanceof Monkey) {
      if (this.energyLevel < 4) {
        return `This animal is too tired to make a sound!`;
      } else {
        this.energyLevel -= 4;
        return `${this.name} made a sound!`;
      }
    } else {
      if (this.energyLevel < 3) {
        return `This animal is too tired to make a sound!`;
      } else {
        this.energyLevel -= 3;
        return `${this.name} made a sound!`;
      }
    }
  }
  eatFood() {
    if (this instanceof Monkey) {
      this.energyLevel += 2;
    } else {
      this.energyLevel += 5;
    }
    return `${this.name} is munching!`;
  }
  sleep() {
    if (this instanceof Tiger) {
      this.energyLevel += 5;
    } else {
      this.energyLevel += 10;
    }
    return `${this.name} is sleeping!`;
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
const j = new Monkey("Monkey", 10);
const s = new Snake("Tempter", 10);
const t = new Tiger("Tigger", 10);
const Amazon = new Jungle("Amazon Rainforest");
console.log(Amazon.soundOff());
