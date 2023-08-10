const animalData = require("./animal-data.json");
class AnimalShelter {
  constructor() {
    this.animals = [];
  }
  addAnimal(animal) {
    const animalClass = new Animal(
      animal.name,
      animal.species,
      animal.color,
      animal.hunger
    );
    this.animals.push(animalClass);
  }
  adopt(name) {
    const i = this.animals.findIndex((obj) => obj.name === name);
    this.animals.splice(i, 1);
    const names = this.animals.map((animal) => {
      return animal.name;
    });
    console.log(`So long ${name}  ${names} will miss you`);
  }
  getAnimalBySpecies(species) {
    return this.animals.filter((obj) => obj.species === species);
  }
}

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }
  greet(greeting = "Hi") {
    console.log(`${greeting}, I am ${this.name} the ${this.species}`);
  }
  feed(food = "food") {
    this.hunger -= 20;
    console.log(`Yum, I love ${food}!`);
  }
}

class Cat extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "cat", color, hunger);
    this.food = "fish";
  }
  greet() {
    super.greet("Meow");
  }
  feed() {
    super.feed(this.food);
  }
}

class Dog extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "dog", color, hunger);
    this.food = "kibble";
  }
  greet() {
    super.greet("Woof");
  }
  feed() {
    super.feed(this.food);
  }
}

const cat = new Cat("bil", "brown");
cat.greet();
const dog = new Dog("Pat", "orange");
console.log(dog);

const shelter = new AnimalShelter();

let animal;
for (let obj of animalData) {
  if (obj.species === "dog") {
    animal = new Dog(obj.name, obj.color, obj.hunger);
  } else if (obj.species === "cat") {
    animal = new Cat(obj.name, obj.color, obj.hunger);
  } else {
    animal = new Animal(obj.name, obj.species, obj.color);
  }
  shelter.addAnimal(animal);
}

for (let obj of animalData) {
  shelter.adopt(obj.name);
}
