
const btnAdd = document.querySelector("button[data-add]");
const resetBtn = document.querySelector("button[data-reset]");

const inputVl = document.querySelector("input[input-value]");
const outpuElement = document.querySelector(".js-total span")


let total = 0;

// console.log(btnAdd);
// console.log(inputVl);
// console.log(outpuElement);


// btnAdd.textContent = "1234";


// * обработка клика на кнопку
btnAdd.addEventListener('click', function () {
    console.log('click!!!');

    const value = Number(inputVl.value);
    console.log("enter:", value);

    total += value;

    console.log("total:", total);
    outpuElement.textContent = total;

 // *  reset iput velue  
    inputVl.value = "";
     
});

resetBtn.addEventListener('click', function () {
    // outpuElement.textContent = 0;
    inputVl.value = "";
});

