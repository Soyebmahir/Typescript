{
    // constraint
    const addCOurseTostudent =<T extends {name:string,id:number}>(student:T)=>{
        const course="Next Level Web Developer"
    return {
    ...student,course
    }
    }
    type StudentUser ={
        name:string,
        age:number,
        id:number
    }
    const student1 =addCOurseTostudent<StudentUser>({name:'Abir',id:1,age:20,})
    const student2 =addCOurseTostudent<StudentUser>({name:'Abir',age:20,id:2})
    // const student3 =addCOurseTostudent({name:'Abir',age:20})  // will give a error: Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; id: number; }
}