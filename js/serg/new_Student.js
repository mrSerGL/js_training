import Student from "./Class_student.js"; 

const username = 'john';
const password = '1234';
const nickname = 'imhot'

const firstStudent = new Student(username, password, nickname);

// console.log(firstStudent);

console.log(firstStudent.validate());

