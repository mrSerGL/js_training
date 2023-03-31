import User from "./Class_user.js";


export default class Student extends User {
    constructor (username, password, nickname){
        super (username, password);  // нужны для передачи в User
        this.nickname = nickname;    // extends свойство 
    }

    // validate() {     // переопределили функцию из User (больший приоритет?...)
    //     if (this.password.length > 10) {  // изменили условие
    //         return true;
    //     }
    //     return false;
    // }

    validate() {   
        super.validate();   // обращаемся(используем) функцию из родительского классса
        if (this.password.length > 10) {
            return true;
        }
        return false;
    }
}