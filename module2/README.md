## Type Assertion

- Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

## Example

```javascript
// Type assertion
let anything:any;
anything = 'Hey there Im a typescript Pro'
anything = 222;
// (anything as string). //now it will suggest me everthing related to string
// (anything as number). //now it will suggest me everthing related to number

const kgToGm =(value:number|string):number|string| undefined=>{
    if(typeof value === 'number'){
        return value * 1000
    }
    if(typeof value === 'string') {
        const convertTOgm = parseFloat(value)*1000
        return `Converted value is  ${convertTOgm}`

    }

}
const result1 = kgToGm(1000) as number
const result2 = kgToGm('1000') as string
// now I know what will return
```
