## Type Assertion

- Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

## Example

```javascript
// Type assertion
let anything:any;
anything = 'Hey there Im a typescript Pro'
anything = 222;
// (anything as string). //now it will suggest me everthing related to string
// (anything as number). //now it will suggest me everthing related to number

const kgToGm =(value:number|string):number|string| undefined=>{
    if(typeof value === 'number'){
        return value * 1000
    }
    if(typeof value === 'string') {
        const convertTOgm = parseFloat(value)*1000
        return `Converted value is  ${convertTOgm}`

    }

}
const result1 = kgToGm(1000) as number
const result2 = kgToGm('1000') as string
// now I know what will return
```

## Inerface

```javascript
// interface
type User1 = {
  name: string,
  age: number,
};
interface User2 {
  name: string;
  age: number;
}

// intersection with type alias
type userWithRoll = User1 & { role: string };
const user1: userWithRoll = {
  name: "Soyeb",
  age: 12,
  role: "Developer",
};
// intersection with interface
interface userWithRoll2 extends User2 {
  role: string;
}
const user2: userWithRoll2 = {
  name: "Soyeb",
  age: 12,
  role: "Developer",
};

// also we can extends type alias

type rollnumber = number; // we can easily type alias for primitive type
// we cant interface for primitive type

// for array
type Roll1 = number[];
interface Roll2 {
  [index: number]: number;
}
// for function
type Add = (num1: number, num2: number) => number;
interface Add2 {
  (num1: number, num2: number): number;
}

const add1: Add = (num1, num2) => num1 + num2; //with type alias
const add2: Add2 = (num1, num2) => num1 + num2; // with interface
```

```javascript
// generic type
// let declare some type  for array
type numbersArray = number[];
const rollNumbers: numbersArray = [1, 2, 3, 4]; //as you can see we declared an array type and assign it to our actual array as a type/ alias. more example bellow
type stringArray = string[];
const friendsName: stringArray = ["soyeb", "akash"];
type booleanArray = boolean[];
const isActive = [true, false, true];
// we also declare as
const mentors: Array<number> = [1, 2, 3];
// or
type genericArraytype = Array<string>;
const mentors2: genericArraytype = ["soyeb", "abir"];

//but if we can create dynamic generic we can dynamically change the type of array so that we don't have to repeat type alias for every type of array
type genericArray<T> = Array<T>;
const developers: genericArray<string> = ["sohag", "soyeb", "asif"];
const studentsId: genericArray<number> = [1223123, 12341234, 98762348];
const user: genericArray<{ name: string, age: number }> = [
  //genericArray<object> -> should not be declared like this cause we dont handle the type
  {
    name: "soyeb",
    age: 234,
  },
];
// like as we passing arguments to the function and function receive the arguments data as parameter dynamically

// generic tuple
type genericTuple<X, Y> = [X, Y]; // x,y getting the type dynamically and since its a tuple then should be doubled value at a time
const manus: genericTuple<string, string> = ["Mr.X", "Mr.y"];
const userWithID: genericTuple<number, { name: string, age: number }> = [
  123,
  {
    name: "Soyeb",
    age: 29,
  },
];
// type User={
// name:string, we can easily typed the object and pass it to generic
// age:number
// }
interface User {
  name: string; //also with interface
  age: number;
}
const userWithID2: genericTuple<number, User> = [
  123,
  { name: "Tuir", age: 23 },
];
```

```javascript
 // generic with interface
interface developer<T,X>{
    name:string,
    computer:{
        brand:string,
        model:string,
        releaseYear:number
    }
    smartWatch:T, // we want to handle of watch by generic and dynamically
     bike?:X
}
const poorDeveloper:developer<{
    brand:string,
    model:string,
    display:string

}>={
    name:'soyeb',
    computer:{
        brand:'dell',
        model:'optiplex3242',
        releaseYear:2012
    },
    smartWatch:{
        brand:'asus',
        model:'bit',
        display:'nai'

    }

}
const richDeveloper:developer<{
    brand:string,
    model:string,
    price:number,
    manufacture:string
},{name:string,model:string}>={
    name:'sohag',
    computer:{
        brand:'Apple',
        model:'jani na',
        releaseYear:2000
    },
    smartWatch:{
        brand:'Google',
        model:'bit',
        price:200000000000,
        manufacture:'USA'
    },
     bike:{
        name:'Yamah',
        model:'RTX100'
    }


}

```

```javascript
// though we want to code clean we have to clean some mass
 // generic with interface
interface developer<T>{
    name:string,
    computer:{
        brand:string,
        model:string,
        releaseYear:number
    }
    smartWatch:T // we want to handle of watch by generic and dynamically
}
//type alias for watch object so that we dont have to massing around generic field
type poorWatch={
    brand:string,
    model:string, //
    display:string

}
const poorDeveloper:developer<watch>={
    name:'soyeb',
    computer:{
        brand:'dell',
        model:'optiplex3242',
        releaseYear:2012
    },
    smartWatch:{
        brand:'asus',
        model:'bit',
        display:'nai'

    },

}

//type with interface  for watch object so that we dont have to massing around generic field
interface richWatch {
    brand:string,
    model:string,
    price:number,
    manufacture:string
}
type Bike={
  name:string,
  model:string
}
const richDeveloper:developer<richWatch,Bike>={
    name:'sohag',
    computer:{
        brand:'Apple',
        model:'jani na',
        releaseYear:2000
    },
    smartWatch:{
        brand:'Google',
        model:'bit',
        price:200000000000,
        manufacture:'USA'
    },
     bike:{
        name:'Yamah',
        model:'RTX100'
    }

}

```

## function with generic

```typescript
// function with generic

// normal example
const createArray = (param: string): string[] => {
  return [param];
};
const result1 = createArray("Bangladesh");

//with generic
const createArrayWithGenreic = <T>(param: T): T[] => {
  return [param];
};
const resultWithgeneric = createArrayWithGenreic<string>("Bangladesh");

type User = {
  name: string;
  age: number;
};
const resGenericObject = createArrayWithGenreic<User>({
  name: "soyeb",
  age: 31,
});

// genericWithTuple

// for tuple we have to receive to arguments that why we need to receive to generic type T,Q
const createArrayWithGenreicTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};
const resultWithgenericTuple = createArrayWithGenreicTuple<string, string>(
  "Bangladesh",
  "asia"
);

type User2 = {
  name: string;
  age: number;
};
const resGenericObjectTuple = createArrayWithGenreicTuple<User, string>(
  { name: "soyeb", age: 31 },
  "bangladesh"
);

const addCOurseTostudent = <T>(student: T) => {
  const course = "Next Level Web Developer";
  return {
    ...student,
    course,
  };
};
type StudentUser = {
  name: string;
  age: number;
};
const result2 = addCOurseTostudent<StudentUser>({ name: "Abir", age: 20 });
```

## constraints

- If we require more control over our generic types, we use TypeScript Generic Constraints. We use Generic type constraints to specify limits on the types for generic type parameters. This helps us to determine that generic types extend or implement a specific type or contain specific properties

```typescript
// constraint

const addCOurseTostudent = <T extends { name: string; id: number }>(
  student: T
) => {
  const course = "Next Level Web Developer";
  return {
    ...student,
    course,
  };
};
type StudentUser = {
  name: string;
  age: number;
  id: number;
};
const student1 = addCOurseTostudent<StudentUser>({
  name: "Abir",
  id: 1,
  age: 20,
});
const student2 = addCOurseTostudent<StudentUser>({
  name: "Abir",
  age: 20,
  id: 2,
});
// const student3 =addCOurseTostudent({name:'Abir',age:20})  // will give a error: Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; id: number; }
```
