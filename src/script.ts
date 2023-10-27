let studentName ='soyeb';
// studentName=34; //here Im getting error because in Ts when you declare and assign at the same line it will take the assigned data type permanently
console.log(studentName);
let number ;
number =34;
number = 'aabir' //there wont be any error because we didnt assign at the same line where the variable declared

// funciton 
// vanilla way
// function add (a,b){
//     return a+b 
// }
// add(2,3)

//Typescript: should declare the variable type implicitly
function add2 (a:number,b:number){
    return a+b 
}
add2(2,3)

// Array
const fruits =['banana','apple','orange']
// fruits.push(34) //will give a error cz fruits is an array of string

const student=[]; // but with this you can store any type of data in your array
student.push('Soyeb')
student.push('26')
const developer =['soyeb',24,{},true] // now it will take string,number,object, boolean

// object 
const employe={
    name:'Soyeb',
    age:24,
    retired:false
}
// employe.name=24 // will give an error cause name already assigned as a string type variable
// employe.salary=3000 // also give an error cz there is no variable or property named salary


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

// any type
let  name1:any;
let student4:any[]=[]

// function with ts and optional parameter
let myFunc:Function;
myFunc=(a:number,b:number,c?:number)=>{
    console.log(a+b);
}
myFunc(10,20)
// function with ts and default parameter
let myFunc2:Function;
myFunc2=(a:number,b:number,c:number=0)=>{
    console.log(a+b);
}
myFunc2(10,20)

// Type Alias
type stringOrNumber =string|number;
type userType={name:string,age:number}
const userdetails =(id:stringOrNumber, user:userType)=>{
    console.log(`User Id ${id} and name ${user.name }`);
}
const studentInfo=(id:stringOrNumber,student:userType)=>{
    console.log('Anything');

}

// function signature 
// which means declare a function, return type should be declared, if parameter exist then it should be declared
let add:(a:number,b:number)=>number
add=(a:number,b:number)=>{
return a+b
}
add(3,4)

let userDetails2:(id:number|string,userInfo:{name:string,age:number})=>void
userDetails2=(id:number|string,user:{name:string,age:number})=>{
console.log(user.name);
}
userDetails2(222,{name:'Soyeb',age:26})

// classes
class Player{
    name:string;
    age:number;
    country:string
    constructor(n:string,a:number,c:string){
        this.name=n;
        this.age=a;
        this.country=c

    }
    play(){
        console.log(`${this.name} is playing for ${this.country}`);
    }
}
const marshafi = new Player('Mash',34,'Bangladesh')
const sakib = new Player('Shakib',34,'Bangladesh')

const players:Player[]=[];
players.push(marshafi)
players.push(sakib)
console.log(players);
