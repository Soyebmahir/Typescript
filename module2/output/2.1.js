"use strict";
{
    // Type assertion
    let anything;
    anything = 'Hey there Im a typescript Pro';
    anything = 222;
    // (anything as string). //now it will suggest me everthing related to string
    // (anything as number). //now it will suggest me everthing related to number
    const kgToGm = (value) => {
        if (typeof value === 'number') {
            return value * 1000;
        }
        if (typeof value === 'string') {
            const convertTOgm = parseFloat(value) * 1000;
            return `Converted value is  ${convertTOgm}`;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm('1000');
}
