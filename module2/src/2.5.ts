{
    // start
// function with generic

// normal example
const createArray = (param :string):string[]=>{
    return [param]
}
const result1= createArray('Bangladesh')


//with generic
const createArrayWithGenreic=<T>(param:T):T[]=>{
    return [param]

}
const resultWithgeneric = createArrayWithGenreic<string>('Bangladesh')

type User ={
    name:string,
    age:number
}
const resGenericObject = createArrayWithGenreic<User>({name:'soyeb',age:31})

// genericWithTuple

// for tuple we have to receive to arguments that why we need to receive to generic type T,Q
const createArrayWithGenreicTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]

}
const resultWithgenericTuple = createArrayWithGenreicTuple<string,string>('Bangladesh','asia')

type User2 ={
    name:string,
    age:number
}
const resGenericObjectTuple = createArrayWithGenreicTuple<User,string>({name:'soyeb',age:31},'bangladesh')

// another example

const addCOurseTostudent =<T>(student:T)=>{
    const course="Next Level Web Developer"
return {
...student,course
}
}
type StudentUser ={
    name:string,
    age:number
}
const result2 =addCOurseTostudent<StudentUser>({name:'Abir',age:20})








    // end

}