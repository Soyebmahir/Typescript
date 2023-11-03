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
