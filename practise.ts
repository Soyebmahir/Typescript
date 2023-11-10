//1. need to extract the key from an array of object
type User = {
    name: string;
    age: number;
}
// type array<User>=Array<User>
const user: User[] = [
    {
        name: 'sohag',
        age: 23
    },
    {
        name: 'soyeb',
        age: 23
    },
    {
        name: 'mosta',
        age: 23
    },
    {
        name: 'abir',
        age: 23
    },
]
const user2: { model: string, price: number }[] = [
    {
        model: 'sohag',
        price: 23
    },
    {
        model: 'soyeb',
        price: 23
    },
    {
        model: 'mosta',
        price: 23
    },

]
const getKeys = <T, K extends keyof T>(obj: T[], key: K): T[K][] => {
    // T is the array of object and K is the property/key of T object


    return obj.map(user => user[key])

}
console.log(getKeys(user, 'name'));
console.log(getKeys(user2, 'model'));



// 2: [[key:value],[key,value]] => {key:value,key:value}
const arrayOfArray: [string, any][] = [
    ["id", 12],
    ['name', 'soyeb'],
    ['age', 26]

]

// const arrayToObject = (array: [string, any][]):object => {} //narrowed
// const arrayToObject = (array: [string, any][]):{id:number,name:string,age:number} => {} //narrowed
const arrayToObject = <T extends string, U>(array: [T, U][]): Record<T, U> => {
    const convertToObject = array.reduce((finalObject, [key, value]) => { //array = [key,value]
        finalObject[key] = value;
        return finalObject;
    }, {} as Record<T, U>) //should be assert the type of object that will be returned
    return convertToObject;
}
console.log(arrayToObject(arrayOfArray)); 