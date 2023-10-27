"use strict";
let studentName = 'soyeb';
// studentName=34; //here Im getting error because in Ts when you declare and assign at the same line it will take the assigned data type permanently
console.log(studentName);
let number;
number = 34;
number = 'aabir'; //there wont be any error because we didnt assign at the same line where the variable declared
// funciton 
// vanilla way
// function add (a,b){
//     return a+b 
// }
// add(2,3)
//Typescript: should declare the variable type implicitly
function add2(a, b) {
    return a + b;
}
add2(2, 3);
// Array
const fruits = ['banana', 'apple', 'orange'];
// fruits.push(34) //will give a error cz fruits is an array of string
const student = []; // but with this you can store any type of data in your array
student.push('Soyeb');
student.push('26');
const developer = ['soyeb', 24, {}, true]; // now it will take string,number,object, boolean
// object 
const employe = {
    name: 'Soyeb',
    age: 24,
    retired: false
};
// employe.name=24 // will give an error cause name already assigned as a string type variable
// employe.salary=3000 // also give an error cz there is no variable or property named salary
// Explicit and Union type
let a; //cant be assigned any other type of data in this variable
let student2;
let student3 = []; //union type
student3.push(23);
student3.push('Sohag');
student3.push('Sohag');
let employe2; // now i can give any type of object structure
let employee3; //now I have to assign value in this object just like this schema
// any type
let name1;
let student4 = [];
// function with ts and optional parameter
let myFunc;
myFunc = (a, b, c) => {
    console.log(a + b);
};
myFunc(10, 20);
// function with ts and default parameter
let myFunc2;
myFunc2 = (a, b, c = 0) => {
    console.log(a + b);
};
myFunc2(10, 20);
const userdetails = (id, user) => {
    console.log(`User Id ${id} and name ${user.name}`);
};
const studentInfo = (id, student) => {
    console.log('Anything');
};
// function signature 
// which means declare a function, return type should be declared, if parameter exist then it should be declared
let add;
add = (a, b) => {
    return a + b;
};
add(3, 4);
let userDetails2;
userDetails2 = (id, user) => {
    console.log(user.name);
};
userDetails2(222, { name: 'Soyeb', age: 26 });
// classes
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const marshafi = new Player('Mash', 34, 'Bangladesh');
const sakib = new Player('Shakib', 34, 'Bangladesh');
const players = [];
players.push(marshafi);
players.push(sakib);
console.log(players);
// access modifier
class Player2 {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const marshafi2 = new Player('Mash', 34, 'Bangladesh');
const sakib2 = new Player('Shakib', 34, 'Bangladesh');
// we access modifier access must be interrupt
// in public can do anything
// in private cant modify or show
// in readonly can just show
const players2 = [];
players.push(marshafi2);
players.push(sakib2);
console.log(players2);
