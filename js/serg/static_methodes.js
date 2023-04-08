// https://www.youtube.com/watch?v=yOIbvm48S4A


class User {

    static property = true   //   статическое свойство

    constructor(name) {
        this.name = name;
    }

    static getRole(name, password) {    // можно обратиться без создания нового объекта
        //....
        return 'odmin';
    }

    static getId(email) {
        return 'Id';
    }

    static getUser(id) {
        return userInfo;
    }
}

console.log(User.getRole('SerG', '1234')); // можно обратиться без создания нового объекта
console.log(User.property);



class Student extends User {

   static property = false;  //  можно перезаписать

    constructor(){
        super(name);
        this.role = role;
    }
}
