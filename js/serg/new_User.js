import User from "./Class_user.js";

let a = 'hurry';
let b = 'qwerty1';

const person = new User(a, b);
person.access = person.validate();

// console.log(person);

const student = {
    __proto__ : person,
    nickname: "dolce"

}

// console.log(student);
