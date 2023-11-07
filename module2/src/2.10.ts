{
    //look up type
    // we can get any property in typescript of object by using type alias or interface
    // syntax:
    interface IUser {
        name: string;
        email: string;
        phone: number;
    }

    //  type getPropertyType = typeName['propertyName']

    type getProperType = IUser["name"]; // type is string
    type getEmailType = IUser["email"]; // type is string
    type getPhoneType = IUser["phone"]; // type is number




    //mapped
    // By using mapped type in typescript we can mapped every property of type alias or interface.
    // expression 
    type AreaConverted<T> = {
        [key in keyof T]: T[key];
    };

    // example
    type areaNumber = {
        height: number,
        width: number
    }
    // converting in string with look up
    type Height = areaNumber['height'] // Height is number type
    // but we need more flexibility
    type convertArea<T> = {
        [index in keyof T]: T[index]
    }
    const areaString: convertArea<{
        height: string,
        width: number
    }> = {
        height: '12',
        width: 20
    }



    // 
}