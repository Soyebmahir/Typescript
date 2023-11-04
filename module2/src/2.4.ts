{
    //start

    // generic with interface
interface developer<T,X=null>{
    name:string,
    computer:{
        brand:string,
        model:string,
        releaseYear:number 
    }
    smartWatch:T // we want to handle of watch by generic and dynamically
    bike?:X
}
// bike is optional so default value should be null 
const poorDeveloper:developer<{
    brand:string,
    model:string,
    display:string


}>={
    name:'soyeb',
    computer:{
        brand:'dell',
        model:'optiplex3242',
        releaseYear:2012
    },
    smartWatch:{
        brand:'asus',
        model:'bit',
        display:'nai'

    }
}
const richDeveloper:developer<{
    brand:string,
    model:string,
    price:number,
    manufacture:string
},{name:string,model:string}>={
    name:'sohag',
    computer:{
        brand:'Apple',
        model:'jani na',
        releaseYear:2000
    },
    smartWatch:{
        brand:'Google',
        model:'bit',
        price:200000000000,
        manufacture:'USA'
    },
    bike:{
        name:'Yamah',
        model:'RTX100'
    }

}

// though we want to code clean we have to clean some mass
 // generic with interface
interface developer<T>{
    name:string,
    computer:{
        brand:string,
        model:string,
        releaseYear:number
    }
    smartWatch:T // we want to handle of watch by generic and dynamically
}
//type alias for watch object so that we dont have to massing around generic field
type poorWatch={
    brand:string,
    model:string, //
    display:string

}
const poorDeveloper2:developer<poorWatch>={
    name:'soyeb',
    computer:{
        brand:'dell',
        model:'optiplex3242',
        releaseYear:2012
    },
    smartWatch:{
        brand:'asus',
        model:'bit',
        display:'nai'

    },

}

//type with interface  for watch object so that we dont have to massing around generic field
interface richWatch {
    brand:string,
    model:string,
    price:number,
    manufacture:string
}
type Bike={
  name:string,
  model:string
}
const richDeveloper2:developer<richWatch,Bike>={
    name:'sohag',
    computer:{
        brand:'Apple',
        model:'jani na',
        releaseYear:2000
    },
    smartWatch:{
        brand:'Google',
        model:'bit',
        price:200000000000,
        manufacture:'USA'
    },
     bike:{
        name:'Yamah',
        model:'RTX100'
    }

}






    // end
}