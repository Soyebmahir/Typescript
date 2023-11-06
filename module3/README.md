# Class with typescript

## clean class with parameter properties

```typescript
{
  // class
  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    //by using parameter properties we dont need to declare properties and assigning value in properties with this key word
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    makeSound() {
      console.log(`The name is ${this.name} and sound ${this.sound}`);
    }
  }
  const dog = new Animal("Tomy", "dog", "gew");
  dog.makeSound();
  console.log(dog);

  //
}
```
