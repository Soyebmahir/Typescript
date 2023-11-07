{
    // type guard
    // typeof as type guard

    type unionType = string | number;
    const add = (param1: unionType, param2: unionType): unionType => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString()
        }

    }
    console.log(add('3', 3));

    // in as type guard
    type NormalUser = {
        name: string;

    }
    type AdminUser = {
        name: string;
        role: 'admin'
    }
    type userType = AdminUser | NormalUser
    const getUser = (user: userType) => {
        if ('role' in user) {
            console.log(`my name is ${user.name} and Im a ${user.role}`);
        } else {
            console.log(`my name is ${user.name}`);
        }

    }

    const normalUser: NormalUser = {
        name: 'soyeb'
    }
    const adminUser: AdminUser = {
        name: 'Sohag',
        role: 'admin'
    }
    console.log(getUser(normalUser));
    console.log(getUser(adminUser));




    // 
}