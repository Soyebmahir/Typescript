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

# Inheritance

### Inherit from parent class

```typescript
{
  //inheritance
  class Person {
    name: string;
    age: number;
    city: string;
    constructor(name: string, age: number, city: string) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
    getSleep() {
      console.log(`have to sleep at least 6 hour`);
    }
  }
  class student extends Person {
    constructor(name: string, age: number, city: string) {
      super(name, age, city);
    }
  }

  const student1 = new student("abir", 34, "bd");
  console.log(student1);

  class Teacher extends Person {
    designation: string;
    constructor(name: string, age: number, city: string, designation: string) {
      super(name, age, city); //super is used to pass those arguments which are belongs to Parent class
      this.designation = designation;
    }
  }
  const teacher1 = new Teacher("Soyeb", 23, "bd", "Developer");
  console.log(teacher1);

  //
}
```
