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

# typeof type guards

## As we’ve seen, JavaScript supports a typeof operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings:

- "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"

### In TypeScript, checking against the value returned by typeof is a type guard.

```typescript
// type guard
// typeof as type guard

type unionType = string | number;
const add = (param1: unionType, param2: unionType): unionType => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};
console.log(add("3", 3));

// in as type guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};
type userType = AdminUser | NormalUser;
const getUser = (user: userType) => {
  if ("role" in user) {
    console.log(`my name is ${user.name} and Im an ${user.role}`);
  } else {
    console.log(`my name is ${user.name}`);
  }
};

const normalUser: NormalUser = {
  name: "soyeb",
};
const adminUser: AdminUser = {
  name: "Sohag",
  role: "admin",
};
console.log(getUser(normalUser)); //output :my name is soyeb
console.log(getUser(adminUser)); //output : my name is Sohag and Im an admin
```

# type guard with instance

```typescript
{
  // type guard with instance
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
    giveExam() {
      console.log("Giving Exam");
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(name: string, age: number, city: string, designation: string) {
      super(name, age, city);
      this.designation = designation;
    }
    takeExam() {
      console.log(`Taking exam`);
    }
  }
  //common way
  /**
      const getPerson = (person: Person) => {
         if (person instanceof Teacher) {
             person.takeExam()
         } else if (person instanceof student) {
             person.giveExam()
         } else {
             person.getSleep()
         }
 
     }
     */

  //  Smart way
  const isStudent = (person: Person): person is student => {
    //cant use return type as boolean cz when I use this function in getPerson function's condition it will just help the condition but inside the if/else condition function wont undestand the meaning of person. so we will use 'person is student'
    return person instanceof student;
  };
  const isTeacher = (person: Person): person is Teacher => {
    return person instanceof Teacher;
  };

  const getPerson = (person: Person) => {
    if (isTeacher(person)) {
      person.takeExam();
    } else if (isStudent(person)) {
      person.giveExam();
    } else {
      person.getSleep();
    }
  };
  const teacher1 = new Teacher("Soyeb", 23, "bd", "Developer");

  const student1 = new student("abir", 34, "bd");
  getPerson(teacher1);
  getPerson(student1);

  //
}
```

```typescript
{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; //if we use private we cant access this property except inside of his own class. even If i extends this class we wont get the private properties thats why we will use protected.
    protected _balance: number; // protected wont allow us to access from outside class but can be used by extends

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      // writing this. you will see the result
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}
```

```typescript
// getter and setter
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  set deposit(amount: number) {
    this._balance = this.balance + amount;
  }
  // public addDeposit(amount: number) {
  //   this._balance = this._balance + amount;
  // }

  //getter
  get balance() {
    return this._balance;
  }
  // public getBalance() {
  //   return this._balance;
  // }
}

const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);

// goribManusherAccount.deposit = 0;
// goribManusherAccount.addDeposit(20); // function call korte hsse
goribManusherAccount.deposit = 50;
// const myBalance = goribManusherAccount.getBalance(); // function call korte hsse

const myBalance = goribManusherAccount.balance; // property er mto kore
console.log(myBalance);

//
```

```typescript
// static
class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count = Counter.count + 1);
  }

  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

// const instance1 = new Counter();
console.log(Counter.increment()); // 1 -> different memory
// 1 -> different memory

// const instance2 = new Counter();
console.log(Counter.increment()); // 1  --> different memory
// 1  --> different memory

// const instance3 = new Counter();
console.log(Counter.increment());
//
```

```typescript
// polymorphisom

class Person {
  getSleep() {
    console.log(`I am sleeping for 8 hours per day`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am sleeping for 7 hours per day`);
  }
}

class Developer extends Person {
  getSleep() {
    console.log(`I am sleeping for 6 hours per day`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

// pi* r* r
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// height * width
class Reactangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const getShapeArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Reactangle(10, 20);

getShapeArea(shape3);

//
```
