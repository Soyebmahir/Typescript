{
    // generic and constraints with key of
    type vehicle ={
        bike:string,
        car:string,
        ship:string
    }
    // now I need to create a new type as a union type and have to use vehicles keys as my new union types
     type owner = 'bike'|'car'|'ship' //manually
     type owner2 = keyof vehicle


    //  example with function
    // const getPropertyValue =(obj:object, key:string)=>{
    //     // return obj[key] // here we will get an error causeElement implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    //     // No index signature with a parameter of type 'string' was found on type '{}'
    // }
    const user ={
        name:'soyeb',
        age:12
    }
    // const getValue=getPropertyValue(user,'name')

   

    // solve 
    // we could extended keys like Y extends "name"|"age" but we will also give error cz user always should be like this, we strcitly declare that y extends the keyof X
    const getPropertyValue =<X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }
    const getValue=getPropertyValue(user,'name')










    //
}