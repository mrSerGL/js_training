// const axios = require('axios').default;
// import axios from 'axios';
// const axios = require('axios');

//!!!!!     npm run server
// https://www.youtube.com/watch?v=xXBTwb7cc88&t=938s

// ========================================================

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }

// ========================================================

const validJSON = '{"name": "Mango", "age":3}';
const inValidJSON = '{some feedback from backend}';

// try{
//     console.log(JSON.parse(validJSON));
//     // console.log(JSON.parse(inValidJSON));
// }catch(error){
// console.dir(error);
// console.log(error);
// }

//=========================================================

/* const call = id => {
    return fetch(`http://localhost:4040/echo/${id}`)
        .then(response => response.json())
        .then(({ id }) => id);
};

async function one() {
    return call(1);
}

async function two() {
    return call(2);
}

async function three() {
    return call(3);
}

async function main(){

const result1 = await one();
console.log(result1);
const result2 = await two();
console.log(result2);
const result3 = await three();
console.log(result3);

}

main()

// ===== with promise.all ======

    const promis1 = one();
    const promis2 = two();
    const promis3 = three();

    Promise.all([promis1,promis2,promis3])
    .then(data => console.log(data)) */

// ========================================================

async function one() {
    const response = await fetch(`http://localhost:4040/echo/1`);
    return response.json();
    // return fetch(`http://localhost:4040/echo/1`) 
    // .then(response => response.json())
    // .then(({ id }) =>{ id})

}

async function two() {
    const response = await fetch(`http://localhost:4040/echo/2`);
    return response.json();
    // return fetch(`http://localhost:4040/echo/2`)        
    // .then(response => response.json())
    // .then(({ id }) => id)
}

async function three() {
    const response = await fetch(`http://localhost:4040/echo/3`);
    return response.json();
    // return fetch(`http://localhost:4040/echo/3`)        
    // .then(response => response.json())
    // .then(({ id }) => id)
}

async function main(){

const result1 = await one();
console.log(result1.id);

const result2 = await two();
console.log(result2.id);

const result3 = await three();
console.log(result3.id);

}

main()

const result1 = one();
const result2 = two();
const result3 = three();

Promise.all([result1, result2, result3])
.then(data => console.log(data));








