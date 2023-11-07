{
    //inheritance
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
    }

    const student1 = new student('abir', 34, 'bd')
    console.log(student1);

    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, city: string, designation: string) {
            super(name, age, city);
            this.designation = designation;
        }
    }
    const teacher1 = new Teacher('Soyeb', 23, 'bd', 'Developer')
    console.log(teacher1);








    //
}