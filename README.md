# Typescript

In Typescript we can strictly maintain the behavior of type of variable, function parameters, object, array.
We dont need to wait for browser output to confirm about error.
Code editor will provide immediate error

## variable declaration and its behavior

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

### Object

```javascript
const employe = {
  name: "Soyeb",
  age: 24,
  retired: false,
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
