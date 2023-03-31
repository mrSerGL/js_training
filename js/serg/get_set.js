class User {
    constructor() {
        //    this._name = name;
    }

    #secretWord = "Word";

    set name(name) {
        this._name = name.trim().toLowerCase();
    }

    get name(){
        return this._name;
    }
}

const user = new User();
user.name = "SereG"

console.log(user);
console.log(user.name);
console.log(user.secretWord);  // undefined

class User2 extends User{};  //проверяем доступность приватношо св-ва в пасширеном класе
const user2 = new User2();
console.log(user2);
console.log(user2.secretWord);  // undefined


