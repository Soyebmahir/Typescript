{
    // generic type
    // let declare some type  for array
    type numbersArray =number[];
    const rollNumbers:numbersArray=[1,2,3,4] //as you can see we declared an array type and assign it to our actual array as a type/ alias. more example bellow
    type stringArray = string[]
    const friendsName:stringArray =['soyeb','akash']
    type booleanArray = boolean[]
    const isActive = [true,false,true]
    // we also declare as 
    const mentors : Array<number>=[1,2,3]
    // or 
    type genericArraytype = Array<string>
    const mentors2 :genericArraytype=['soyeb','abir']

    //but if we can create dynamic generic we can dynamically change the type of array so that we don't have to repeat type alias for every type of array
    type genericArray<T>=Array<T>
    const developers : genericArray<string>=['sohag','soyeb','asif']
    const studentsId :genericArray<number>=[1223123,12341234,98762348]
    const user:genericArray<{name:string,age:number}>=[
         //genericArray<object> -> should not be declared like this cause we dont handle the type 
        {
            name:'soyeb',
            age:234
        }
    ]
    // like as we passing arguments to the function and function receive the arguments data as parameter dynamically

    // generic tuple
type genericTuple<X,Y>=[X,Y] // x,y getting the type dynamically and since its a tuple then should be doubled value at a time 
const manus :genericTuple<string,string>=['Mr.X', 'Mr.y']
const userWithID:genericTuple<number,{name:string,age:number}>=[123,{
    name:'soyeb',
    age:29
}]
}

