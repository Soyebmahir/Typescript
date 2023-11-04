"use strict";
{
    const rollNumbers = [1, 2, 3, 4]; //as you can see we declared an array type and assign it to our actual array as a type/ alias. more example bellow
    const friendsName = ['soyeb', 'akash'];
    const isActive = [true, false, true];
    // we also declare as 
    const mentors = [1, 2, 3];
    const mentors2 = ['soyeb', 'abir'];
    const developers = ['sohag', 'soyeb', 'asif'];
    const studentsId = [1223123, 12341234, 98762348];
    const user = [
        //genericArray<object> -> should not be declared like this cause we dont handle the type 
        {
            name: 'soyeb',
            age: 234
        }
    ];
    const manus = ['Mr.X', 'Mr.y'];
    const userWithID = [123, {
            name: 'soyeb',
            age: 29
        }];
    const userWithID2 = [123, { name: 'Tuir', age: 23 }];
}
