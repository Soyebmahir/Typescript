{
    // access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number; //if we use private we cant access this property except inside of his own class. even If i extends this class we wont get the private properties thats why we will use protected.
        protected _balance: number; // protected wont allow us to access from outside class but can be used by extends

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            // writing this. you will see the result
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);

    //
}