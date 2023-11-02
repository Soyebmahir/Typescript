var studentName = 'soyeb';
// studentName=34; //here Im getting error because in Ts when you declare and assign at the same line it will take the assigned data type permanently
console.log(studentName);
var number;
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
var fruits = ['banana', 'apple', 'orange'];
// fruits.push(34) //will give a error cz fruits is an array of string
var student = []; // but with this you can store any type of data in your array
student.push('Soyeb');
student.push('26');
var developer = ['soyeb', 24, {}, true]; // now it will take string,number,object, boolean
// Tuple
var ageName = [54, 'Abir'];
ageName[0] = 'Akash'; // it will give me access to assign string or Number in any index
var ageName2 = [54, 'Abir'];
// ageName2[0]='abir'  // it wont allow me to change the tuple pattern
// object 
var employe = {
    name: 'Soyeb',
    age: 24,
    retired: false
};
var user;
user = {
    name: 'soyeb',
    active: true
};
var user2;
user2 = {
    // name:'soyeb', // giving me error cz explicitly declared type as "Soyeb Mohammad", have to assign  Soyeb Mohammad as a value, which is called literal type
    name: 'Soyeb Mohammad',
    active: true
};
// employe.name=24 // will give an error cause name already assigned as a string type variable
// employe.salary=3000 // also give an error cz there is no variable or property named salary
// Explicit and Union type
var a; //cant be assigned any other type of data in this variable
var student2;
var student3 = []; //union type
student3.push(23);
student3.push('Sohag');
student3.push('Sohag');
var employe2; // now i can give any type of object structure
var employee3; //now I have to assign value in this object just like this schema
// any type
var name1;
var student4 = [];
// function with ts and optional parameter
var myFunc;
myFunc = function (a, b, c) {
    console.log(a + b);
};
myFunc(10, 20);
// function with ts and default parameter
var myFunc2;
myFunc2 = function (a, b, c) {
    if (c === void 0) { c = 0; }
    console.log(a + b);
};
myFunc2(10, 20);
var userdetails = function (id, user) {
    console.log("User Id ".concat(id, " and name ").concat(user.name));
};
var studentInfo = function (id, student) {
    console.log('Anything');
};
// function signature 
// which means declare a function, return type should be declared, if parameter exist then it should be declared
var add;
add = function (a, b) {
    return a + b;
};
add(3, 4);
var userDetails2;
userDetails2 = function (id, user) {
    console.log(user.name);
};
userDetails2(222, { name: 'Soyeb', age: 26 });
// classes
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " is playing for ").concat(this.country));
    };
    return Player;
}());
var marshafi = new Player('Mash', 34, 'Bangladesh');
var sakib = new Player('Shakib', 34, 'Bangladesh');
var players = [];
players.push(marshafi);
players.push(sakib);
console.log(players);
// access modifier
var Player2 = /** @class */ (function () {
    function Player2(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player2.prototype.play = function () {
        console.log("".concat(this.name, " is playing for ").concat(this.country));
    };
    return Player2;
}());
var marshafi2 = new Player('Mash', 34, 'Bangladesh');
var sakib2 = new Player('Shakib', 34, 'Bangladesh');
// we access modifier access must be interrupt
// in public can do anything
// in private cant modify or show
// in readonly can just show
var players2 = [];
players.push(marshafi2);
players.push(sakib2);
console.log(players2);
function drawRectangular(options) {
    var width = options.width;
    var length = options.length;
}
drawRectangular({ width: 30,
    length: 20 });
var Player5 = /** @class */ (function () {
    function Player5(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player5.prototype.play = function () {
        console.log("object");
    };
    return Player5;
}());
var Soyeb;
Soyeb = new Player5('Soyeb', 34, 'Bangladesh');
console.log(Soyeb);
