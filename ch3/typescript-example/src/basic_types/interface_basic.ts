import { Animal, Dog, DoSound, Duck } from "./animals";

export function basic_interface() {
  let chicken: Animal = {
    kingdom: "Animalia",
    species: "Gallus",
    class: "birds",
  };

  console.log(
    `kingdom:${chicken.kingdom} species:${chicken.species} class:${chicken.class}`
  );
}

export function animalDoSound() {
  let duck = new Duck();
  let dog = new Dog();

  makeSound(duck);
  makeSound(dog);
}

function makeSound(animal: DoSound) {
  console.log(`The animal make this sound:${animal.doASound()}`);
}
