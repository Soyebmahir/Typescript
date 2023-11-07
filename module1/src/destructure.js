"use strict";
const user = {
    id: 1234,
    name: {
        firstName: 'soyeb',
        lastName: 'Mohammad'
    }
};
const { id, name: { lastName: lastN } //name alias
 } = user;
// array destructure
const friends = ['soyeb', 'abir', 'Sohag', 'toha', 'nabil'];
const [, , closeFriends, ...rest] = friends;
