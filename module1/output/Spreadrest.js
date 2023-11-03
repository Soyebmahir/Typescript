"use strict";
{
    const friends = ['Soyeb', 'abir', 'Tanvir'];
    const friends2 = ['Obydul', 'Mahmudul'];
    friends.push(...friends2);
    function friends3(...friends) {
        friends.forEach(element => {
            console.log(`hey there ${element}`);
        });
    }
    friends3('soyeb', 'abir', 'Tanvir');
}
