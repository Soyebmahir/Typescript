{
    // 
    // Some utilities we should know about
    type Person = {
        name: string,
        age: number,
        email?: string,
        contactNo: number
    }
    // pick
    // by pick we can create new type of object from existed object's typed key
    type name = Pick<Person, "name">
    type nameAge = Pick<Person, "name" | "age">

    // omit
    // opposite of pick
    // omit ignore these types which are declared as key 
    type contacNumber = Omit<Person, "name" | "age">
    // result
    /*type contacNumber = {
        email?: string | undefined;
        contactNo: number;
    }*/

    // required
    type PersonRequired = Required<Person>
    /**
     type PersonRequired = {
    name: string;
    age: number;
    email: string;
    contactNo: number;
     */

    //Partial
    type partialPerson = Partial<Person>
    // result 
    /**
     type partialPerson = {
    name?: string | undefined;
    age?: number | undefined;
    email?: string | undefined;
    contactNo?: number | undefined;
}
     */

    // readonly
    type PersonReadOnly = Readonly<Person>
    // result 
    /**
     type PersonReadOnly = {
    readonly name: string;
    readonly age: number;
    readonly email?: string | undefined;
    readonly contactNo: number;
}
     */
    // example 
    const person1: PersonReadOnly = {
        name: 'soyeb',
        age: 12,
        email: 'habsd',
        contactNo: 1233
    }
    /**
     * if I try to assign new value to person1's name property then-
     person1.name='gshdg' 
     Cannot assign to 'name' because it is a read-only property.
     
     */

    //  record
    // Record<K, V> is a generic which allows you to define the type of keys and values on a JavaScript object
    type myObj = {
        a: string,
        b: string
    }
    const obj1: myObj = {
        a: 'aa',
        b: 'vv'
        // c:'dgh' giving me error cause not exist in type

    }

    // solve 
    type myObj2 = Record<string, string>
    const obj2: myObj2 = {
        a: 'aa',
        b: 'vv',
        c: 'jh'
    }

    // further use
    const obj3: Record<string, unknown> = {}




    // 
}