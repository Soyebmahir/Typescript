# Typescript

## What It TypeScript:

- TypeScript is a language for application-scale JavaScript
- Typescript is an object oriented Programming Language that build on top of JavaScript with Extra Feature.
- Typescript is superset of JavaScript developed by microsoft.
- Typescript is strongly Typed programming Languages.
- Typescript Designed By Andres Hejlsberg with c# or .net specification .
- Typescript can be transpiled older versions of javaScript

## Whats Wrong with JavaScript ?

- JavaScript is an Dynamically Typed Language.
- JavaScript is not suitable for Large scale application.
- Lack of Strong Typing.
- only errors during runtime.
- Suffers type correction.
- Hard to find bugs.
- Can Browser Recognize TypeScript Code ?
- No, We need to transpiled typeScript by using complier like babel, swc etc.
- Typescript convert into javaScript then Browser can read the code.

## Benefits of TypeScript:

- Support all JS Types.
- String
- Number
- Boolean
- Null
- Undefined
- Object
- Symbol

## Give Some new types :

- Interface
- void
- Array
- Tuple
- Enum
- Union
- InterSection

## Type Safety

- Support Older Browser
- Less Bugs
- Increase Developer Productivity
- Less Bugs && Less Testing.
- Best Intelligence support.
- Typescript give us an complier name tsc or typescript complier

## TypeScript Installation :

- npm i -g typescript

## TypeScript Configs or tsconfig.js Command:

- tsc --init

## TypeScript File Run:

- tsc filename.ts
- tsc --w file.ts

## after include configs only use :

tsc - watch;

# variable declaration and its behavior

```javascript
let studentName = "soyeb";
studentName = 34; //here Im getting error because in Ts when you declare and assign at the same line it will take the assigned data type permanently, studentName variable act as a string type variable
console.log(studentName);
let number;
number = 34;
number = "aabir"; //there wont be any error because we didnt assign at the same line where the variable declared
// #proper way
let studentName: string;
let age: number;
let isActive: boolean;
```

### Function

```javascript
// vanilla way
function add(a, b) {
  return a + b;
}
add(2, 3);

//Typescript: should declare the variable type implicitly
function add2(a: number, b: number) {
  return a + b;
}
add2(2, 3);
```

### Array

```javascript
const fruits = ["banana", "apple", "orange"];
// fruits.push(34) //will give a error cz fruits is an array of string

const student = []; // but with this you can store any type of data in your array
student.push("Soyeb");
student.push("26");
const developer = ["soyeb", 24, {}, true]; // now it will take string,number,object, boolean
```

### Tuple

```javascript
let ageName = [54, "Abir"];
ageName[0] = "Akash"; // it will give me access to assign string or Number in any index
let ageName2: [number, string] = [54, "Abir"];
// ageName2[0]='abir'  // it wont allow me to change the tuple pattern
```

### Object

```javascript
const employe: {
  name: string,
  age: number,
  retired: boolean,
} = {
  name: "Soyeb",
  age: 24,
  retired: false,
};

let user: {
  name: string,
  age?: number, //here age is declared as option by ? mark
  active: boolean,
};
user = {
  name: "soyeb",
  active: true,
};
// employe.name=24 // will give an error cause name already assigned as a string type variable
// employe.salary=3000 // also give an error cz there is no variable or property named salary
```

### // Explicit and Union type

```javascript
let a: string; //cant be assigned any other type of data in this variable

let student2: string[];
let student3: (number | string)[] = []; //union type
student3.push(23);
student3.push("Sohag");
student3.push("Sohag");

let employe2: object; // now i can give any type of object structure
let employee3: {
  name: string,
  age: number,
  adult: boolean,
}; //now I have to assign value in this object just like this schema
```

### any type

```javascript
// any type
let name1: any;
let student4: any[] = [];
```

```javascript
// function with ts and optional parameter
let myFunc: Function;
myFunc = (a: number, b: number, c?: number) => {
  console.log(a + b);
};
myFunc(10, 20);

// arrow funciton
const addArrow = (num1: number, num2: number): number => num1 + num2;
// map
const arr: number[] = [2, 3, 4];
const newArr: number[] = arr.map((num: number): number => num * num);
```

```javascript
// function with ts and default parameter
let myFunc2: Function;
myFunc2 = (a: number, b: number, c: string = true) => {
  console.log(a + b);
};
myFunc2(10, 20);

//and we can explicitly declare the type of return
let myFunc3: Function;
myFunc3 = (a: number, b: number, c: string = true): number => {
  console.log(a + b);
};
myFunc3(10, 20);
```

## Important

### in vanilla, if we dont return anything from function it will return undefined by default but in typescript it will return void

### void and undefined two different thing, void means nothing but undefined means not defined which is also a data type

### Type Alias

```javascript
// Type Alias
type stringOrNumber = string | number;
type userType = { name: string, age: number };
const userdetails = (id: stringOrNumber, user: userType) => {
  console.log(`User Id ${id} and name ${user.name}`);
};
const studentInfo = (id: stringOrNumber, student: userType) => {
  console.log("Anything");
};
```

### function signature

```javascript
// which means declare a function, return type should be declared, if parameter exist then it should be declared
let add: (a: number, b: number) => number;
add = (a: number, b: number) => {
  return a + b;
};
add(3, 4);

let userDetails2: (
  id: number | string,
  userInfo: { name: string, age: number }
) => void;
userDetails2 = (id: number | string, user: { name: string, age: number }) => {
  console.log(user.name);
};
userDetails2(222, { name: "Soyeb", age: 26 });
```

### classes

```javascript
// classes
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }
  play() {
    console.log(`${this.name} is playing for ${this.country}`);
  }
}
const marshafi = new Player("Mash", 34, "Bangladesh");
const sakib = new Player("Shakib", 34, "Bangladesh");

const players: Player[] = [];
players.push(marshafi);
players.push(sakib);
console.log(players);
```

```javascript
// access modifier
class Player2{
    public name:string;
    private age:number;
    readonly country:string
    constructor(n:string,a:number,c:string){
        this.name=n;
        this.age=a;
        this.country=c

    }
    play(){
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const marshafi2 = new Player('Mash',34,'Bangladesh')
const sakib2 = new Player('Shakib',34,'Bangladesh')

// we access modifier access must be interrupt
// in public can do anything
// in private cant modify or show
// in readonly can just show

const players2:Player[]=[];
players.push(marshafi2)
players.push(sakib2)
console.log(players2);
```

## ? Changed Name With Use Case :

## Ternary Operator : "? "

- Ternary operator is a conditional operator.
- Ternary Operator get three operands.

# Syntax: condition ? expression : expression

- If the condition is truthy Ternary operator execute the first expression.
  Otherwise execute the second expression

```javascript
type TAge = number;

const age: TAge = 20;

const isAdult: boolean = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult);
```

## Nullish Coalescing Operator: (??)

- Nullish Coalescing Operator is a Logical Operator.

- Nullish Coalescing Operator return it's right hand Operand if its left hand side operand is null or undefined

- It's worked based on null or undefined.

# Syntax : operand ?? "default value"

# Example :

```javascript
type TUserName = string | null | undefined;

const user1 : TUserName = 'mahir";
const user2: TUserName = '';
const user2: TUserName= null;

const isAvail1 = user1 ?? "User One doesn't Exist";
const isAvail2 = user2 ?? "User Two doesn't Exist"
const isAvail3 = user3 ?? "User Three doesn't Exist"
// output1: isAvail1 =mahir
// output2: isAvail2 = User Two doesn't Exist
// output3: isAvail3 = User Three doesn't Exist.

const value = null ?? "default value";
console.log(value);
// output: value = "default value"
```

## Optional Chaining : (?.)

Optional chaining is a feature introduced in ES2020 that allows for safe and concise access to nested object properties. It uses the ?. operator to check if a reference to the left is undefined or null, and if so, it short circuits and returns undefined. Otherwise, it continues the chain of access checks.

## Syntax: obj?.propertyName?.properTyeName?.propertyName

Example:
// Optional Chaining :

```javascript
type TStudent = {
  name: string,
  age: number,
  address: {
    permanentAddress?: string,
    presentAddress: string,
  },
  roll: number,
};

const student: TStudent = {
  name: "Mostafizur Rahaman",
  age: 20,
  address: {
    presentAddress: "Lakshmipur",
  },
  roll: 478889,
};

console.log(student?.address?.permanentAddress);
```
