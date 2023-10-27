// Explicit and Union type
let a:string; //cant be assigned any other type of data in this variable

let student2:string[]; 
let student3:(number|string)[]=[] //union type
student3.push(23)
student3.push('Sohag')
student3.push('Sohag')

let employe2:object; // now i can give any type of object structure
let employee3:{
    name:string,
    age:number,
    adult:boolean
} //now I have to assign value in this object just like this schema

