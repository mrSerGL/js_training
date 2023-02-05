/* String.prototype.toJadenCase = function (str) {

    const newString =[];
    const words = str.split(" ");

    for (const word of words) {
        const letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        const newWord = letters.join("");
        newString.push(newWord);
    }
    // console.log(newString.join(" "));
    return newString.join(" ");
    
};

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real");

console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real")); */

// ==========================================

// //* DESCRIPTION:
// //? Can you find the needle in the haystack?

// //- Write a function findNeedle() that takes an array full of junk but containing one "needle"
// //- After your function finds the needle it should return a message (as a string) that says:  "found the needle at position " plus the index it found the needle, so:
// //- Example "found the needle at position 5"

// var haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

// function findNeedle(haystack){

// /* const FoundIt = haystack.findIndex((something, index, array) => "needle" === something);

// return FoundIt !== -1 ? `found the needle at position ${FoundIt}`: `Sorry, not found the needle`; */

//   return "found the needle at position " + haystack.indexOf("needle")

// };

// console.log(findNeedle(haystack_3));

// ====================================

// const input = [1, 5.2, 4, 0, -1];

// function grow(x){
//     return x.reduce((a, b) => a + b,0);
//   }
// console.log(grow(input));

/* function highAndLow(stringOfSymbols) {
const arrayOfSymbols = stringOfSymbols.split(" ");

const arrayOfNumbers =[];

for (const symbol of arrayOfSymbols) {
    arrayOfNumbers.push( Number(symbol));
}

return `${Math.max(...(arrayOfNumbers))} ${Math.min(...(arrayOfNumbers))}`;

} */

/* //* DESCRIPTION:
// todo:  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){

            console.log(numbers);

    numbers = numbers.split(' ');

            console.log(numbers);
    
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

console.log(highAndLow("1 2 3 4 5"));   // return "5 1"
// console.log(highAndLow("1 2 -3 4 5"));  // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5"));  // return "9 -5" */

// ===================================

// const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
// const s = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

// # рішення 1
/* const getShortWord = string => {
    const array = string.split(' ');
    console.log(array);

    let minSizeWord = 10;

    for (const word of array) {
        console.log(minSizeWord);
        console.log(word, word.length);
        
        if (minSizeWord > word.length) {
            minSizeWord = word.length;
        }
    }
    return minSizeWord;
};

console.log(getShortWord(string)); */

// # рішення 2
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

// # рішення 3
// function findShort(s) {
//     return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
// }
// console.log(findShort(s));



// ============ to Helga ===============



// const orgName = "jhlgljkhgljkh bbkbkjhb  (98769876987)";

// const symbolsOfOrgName = orgName.split("");
// const numbers = ["0", "1", "2", "3", "4", "5"," 6", "7", "8", "9" ]         
// const orgCode = symbolsOfOrgName.filter((symbol) => numbers.includes(symbol));

// console.log("organisation code: ", ...orgCode);

// ===========================
        



