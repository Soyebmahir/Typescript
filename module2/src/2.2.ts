// interface
type User1 ={
    name:string;
    age:number;
}
interface User2 {
    name:string;
    age:number
}

// intersection with type alias
type userWithRoll =User1 &{role:string}
const user1:userWithRoll ={
    name:'Soyeb',
    age:12,
    role:'Developer'
}
// intersection with interface
interface userWithRoll2 extends User2 {role:string}
const user2:userWithRoll2 ={
    name:'Soyeb',
    age:12,
    role:'Developer'
}

// also we can extends type alias 



type rollnumber = number // we can easily type alias for primitive type
// we cant interface for primitive type

// for array 
type Roll1 =number[]
interface Roll2 {
    [index:number]:number
}
// for function 
type Add = (num1:number,num2:number)=>number
interface Add2 {
    (num1:number,num2:number):number
}

const add1:Add =(num1,num2) =>num1+num2 //with type alias
const add2:Add2 =(num1,num2) =>num1+num2 // with interface