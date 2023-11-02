{
    const friends:string[] =['Soyeb','abir','Tanvir']
    const friends2:string[]=[ 'Obydul','Mahmudul']

    friends.push(...friends2)


    function friends3(...friends:string[]){
        friends.forEach(element => {
            console.log(`hey there ${element}`);
        });

    }
    friends3('soyeb','abir','Tanvir')
}