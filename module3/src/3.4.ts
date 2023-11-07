{
    // type guard with instance
    class Person {
        name: string;
        age: number;
        city: string;
        constructor(name: string, age: number, city: string) {
            this.name = name;
            this.age = age;
            this.city = city;

        }
        getSleep() {
            console.log(`have to sleep at least 6 hour`);
        }

    }
    class student extends Person {
        constructor(name: string, age: number, city: string) {
            super(name, age, city)
        }
        giveExam() {
            console.log('Giving Exam');
        }
    }



    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, city: string, designation: string) {
            super(name, age, city);
            this.designation = designation;
        }
        takeExam() {
            console.log(`Taking exam`);
        }
    }
    //common way 
    /**
      const getPerson = (person: Person) => {
         if (person instanceof Teacher) {
             person.takeExam()
         } else if (person instanceof student) {
             person.giveExam()
         } else {
             person.getSleep()
         }
 
     }
     */

    //  Smart way 
    const isStudent = (person: Person): person is student => { //cant use return type as boolean cz when I use this function in getPerson function's condition it will just help the condition but inside the if/else condition function wont undestand the meaning of person. so we will use 'person is student'
        return person instanceof student
    }
    const isTeacher = (person: Person): person is Teacher => {
        return person instanceof Teacher
    }

    const getPerson = (person: Person) => {
        if (isTeacher(person)) {
            person.takeExam()
        } else if (isStudent(person)) {
            person.giveExam()
        } else {
            person.getSleep()
        }

    }
    const teacher1 = new Teacher('Soyeb', 23, 'bd', 'Developer')

    const student1 = new student('abir', 34, 'bd')
    getPerson(teacher1)
    getPerson(student1)




    //
}