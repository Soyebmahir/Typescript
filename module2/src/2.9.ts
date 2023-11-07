{
    //conditonals type
    //At the heart of most useful programs, we have to make decisions based on input. JavaScript programs are no different, but given the fact that values can be easily introspected, those decisions are also based on the types of the inputs. Conditional types help describe the relation between the types of inputs and outputs.

    // expression 

    type a1 = null
    type b1 = undefined
    type x = a1 extends null ? true : false //conditional types
    type NameOrId<T extends number | string> = T extends number
        ? "IdLabel"
        : "NameLabel";

    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
        throw "unimplemented";
    }

    let a = createLabel("typescript");

    //output a: "NameLabel"

    let b = createLabel(2.8);

    //   output b: "IdLabel"


    // nested 
    type y = a1 extends string ? true : b1 extends undefined ? any : undefined



    // example
    type sheikh = {
        bike: string,
        car: string,
        ship: string,
        plane: string
    }
    // checking person's vehicles
    // manually -> direct string union of keys
    type checkVehicles<T> = T extends "bike" | "car" | "ship" ? true : false
    type hasCar = checkVehicles<"car">
    type hasShip = checkVehicles<"ship">

    // with keyof
    type checkVehicles2<T> = T extends keyof sheikh ? true : false
    type hasPlane = checkVehicles<"Plane">





    //
}