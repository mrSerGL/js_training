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

// ================ ToDo: return length of shoprtest word from string===============

// const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

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
// function findShort(string){
//     return Math.min.apply(null, string.split(' ').map(w => w.length));
//   }

// # рішення 3
// function findShort(string) {
//     return string.split(' ').sort((a, b) => a.length - b.length)[0].length;
// }

// console.log(findShort(string));

// ============ to Helga ===============

// const orgName = "jhlgljkhgljkh bbkbkjhb  (98769876987)";

// const symbolsOfOrgName = orgName.split("");
// const numbers = ["0", "1", "2", "3", "4", "5"," 6", "7", "8", "9" ]
// const orgCode = symbolsOfOrgName.filter((symbol) => numbers.includes(symbol));

// console.log("organisation code: ", ...orgCode);

// =============== return the sum of all of the positives ones ======================

//todo: You get an array of numbers, return the sum of all of the positives ones.

const arr = [1, -4, 7, 12];

// ===== var 2
//  function sumPosNumb() {
//    return arr.filter((item) => item > 0).reduce((acc, item) => {
//     acc += item;
//     return acc
//    }, 0);
//  }

// ===== var 2
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }

// ===== var 3
//  function positiveSum(arr) {
//     return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
//   }

// console.log( positiveSum(arr));

// =================== returns the most-famous "hello world!" =======================
//todo:   Make a simple function called greet that returns the most-famous "hello world!".

// function greet() {
//     return "hello world!";
//     }

// const greet = () => "hello world!";

// ============= number (integer) into a string======================================
//todo:   We need a function that can transform a number (integer) into a string.

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function magic(input){
//     return `${input}`
//     return num.toString();
//     return String(num);
// }

// =============  boolean value into its string =====================================
//todo:  Implement a function which convert the given boolean value into its string representation.

// function magic(num){
//     return `${input}`
//     return num.toString();
//     return String(num);
//     return num.toString();
// }

// console.log(magic(false));

// =============  Grade book  =====================================
//todo: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade(s1, s2, s3){
//     const score = (s1+s2+s3)/3;

//         if (90 <= score && score <= 100)    return 'A';
//         else if (80 <= score && score < 90) return 'B';
//         else if (70 <= score && score < 80) return 'C';
//         else if (60 <= score && score < 70) return 'D';
//         else if (0 <= score && score < 60)  return 'F';
//         return "out of range";
//     }

// ====== var 2

// function getGrade (s1, s2, s3) {
//     const avg = (s1+s2+s3)/3;
//     if (avg < 60)  return "F";
//       else if (avg < 70) return "D";
//       else if (avg < 80) return "C";
//       else if (avg < 90) return "B";
//       else return "A";
//   }

// ====== var 3

// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }

// console.log(getGrade(95,90,93));
// console.log(getGrade(70,70,100));
// console.log(getGrade(70,70,70));
// console.log(getGrade(65,70,59));
// console.log(getGrade(58,59,60));

// ============= Abbreviate a Two Word Name  =====================================
// todo:  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

/* function getAbbreviature(name){

// ===== var 1
// return (name.split(" ")[0].split("")[0]+"."+name.split(" ")[1].split("")[0]).toUpperCase();

// ===== var 2
return name
.split(' ')
.map(i => i[0]
.toUpperCase())
.join('.')

}

console.log(getAbbreviature("James Hatfield")); */

// ============= Rock Paper Scissors  =====================================
// todo:  Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ===== var 1
/* function rps(p1, p2){
       if (p1 === "scissors" && p2 === "paper")     return "Player 1 won!"; 
  else if (p1 === "scissors" && p2 === "rock")      return "Player 2 won!";
  else if (p1 === "scissors" && p2 === "scissors")  return "Draw!";

  else if (p1 === "paper" && p2 === "paper")        return  "Draw!"; 
  else if (p1 === "paper" && p2 === "rock")         return "Player 1 won!";
  else if (p1 === "paper" && p2 === "scissors")     return "Player 2 won!";

  else if (p1 === "rock" && p2 === "paper")     return  "Player 2 won!"; 
  else if (p1 === "rock" && p2 === "rock")      return "Draw!";
  else if (p1 === "rock" && p2 === "scissors")  return "Player 1 won!";
}
 */
// ===== var 2
/* const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  }; */

// ===== var 3

/* const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  };

console.log(rps("scissors", "paper")); */

// ============= Get the Middle Character  =====================================
// todo:  You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

/* function getMiddleCharacter (word){
    return word.length%2 === 0 ? word.slice(word.length/2-1 , word.length/2+1) : word.slice(word.length/2, word.length/2+1);
}

console.log(getMiddleCharacter("testin")); */

// ===== var 2

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// ============= Count of positives / sum of negatives  ==========================

// todo:   Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//* If the input is an empty array or is null, return an empty array.

// Example: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

/* function countPositivesSumNegatives(input) {

    const notNullSet = input.filter(item => item !== 0);

    if (Array.isArray(notNullSet) && notNullSet.length) {

        let outputiFNotEmpty = [0, 0];

        notNullSet.map(item => {
            if (item > 0) {
                outputiFNotEmpty[0] = outputiFNotEmpty[0] + 1;
            } else if (item < 0) {
                outputiFNotEmpty[1] = outputiFNotEmpty[1] + item;
            } 
        });
        
        return outputiFNotEmpty;  
    }

    const outputIfEmpty = [];
    return outputIfEmpty;
} */

// ===== var 1

/* function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

console.log(countPositivesSumNegatives(input));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives([0]));
console.log(countPositivesSumNegatives([0, 0])); */

/* // ===== var 2

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
} */

// ============= Descending Order  ==========================

// todo: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// ====== var 1

/* function descendingOrder(input){
    let temp;

    return input
    .toString()
    .split("")
    .map((item) => Number(item))
    .sort((a, b) => b-a)
    .reduce((accum, digit) => (accum * 10) + digit, 0)
} */

// ====== var 2
// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join('')) // !!! nice
// }

// ====== var 3

// function descendingOrder(n){
//   return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
// }

// console.log(descendingOrder(145263));

// =====  How Convert an Array of Digits to an Integer

// const str = '1234'
// console.log(~~str) // expected result: 1234

// const negStr = '-234'
// console.log(~~negStr) // expected result: -234

// const digits = [1, 2, 3, 4, 5];
// const int = Number(digits.join(''));
// console.log(int); // 12345

// =============  Convert number to reversed array of digits ========================
// todo:  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

/* const x = 35231;

function convert(x) {

  return String(x).split('').map(Number).reverse()

  // return String(x).split("").map(item => Number(item)).reverse()
}
console.log(convert(x)); */

// ================== Array.diff ======================

// todo: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

/* function diff(a, b) {

  let output = a;
  b.map(bitem => {output = output.filter(aitem => aitem !== bitem)});
  return output;
} */

// ===== рішення 2 ===  !!!!

/* function diff(a, b) {
  return a.filter(e => !b.includes(e));
}

console.log(diff([1, 2, 2, 2, 3], [2, 8, 3])); */

// =============  Opposite number ========================

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

/* function opposite(number) {
  return(-number);
}

console.log(opposite(5)); */

// =============  The highest profit wins! ========================
//todo:  Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

/* function highestProfit(input){

  return [Math.min (...input) , Math.max(...input)]

}
console.log(highestProfit([1,2,3,4,5])); */

// =============  Summation ========================
//todo: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

/* function sum (input) {
const setNumbers = [];

for  (let i = 1; i <= input; i += 1) {
setNumbers.push(i);
}

console.log(setNumbers);


return setNumbers.reduce((acc, item) => {

 return acc += item
 }, 0);

}

console.log(sum (2)); */

/* var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
} */

// ===============If you can't sleep, just count sheep!! ==============
// todo:  Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

/* function countSheeps(input) {
 let murMur = "";
 for (let i = 1; i <= input; i += 1) {
 murMur += i + ' sheep...';
 }
 return murMur
 };

 console.log(countSheeps(3)); */

// =============== Regex validate PIN code ==============
// todo: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// ===== не получилось
function validatePin(pin) {
    let isOk;
    const pinSymbols = pin.split('');

    isOk = pinSymbols.length === 4 || pinSymbols.length === 6;
    isOk = /^\d+$/.test(pin);

    return isOk;
}

// ====== решение 1
// function validatePin(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

// ====== решение 2

// function validatePin(pin) {

//   var pinlen = pin.length;
//   var isCorrectLength = (pinlen == 4 || pinlen == 6);
//   var hasOnlyNumbers = pin.match(/^\d+$/);

//   if(isCorrectLength && hasOnlyNumbers){
//     return true;
//   }

//   return false;

// }

//  console.log(validatePin("1"));

// =============== array a and a value x ==============
//todo:  You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

/* function check(a, x) {
  
  return a.includes(x)
}

console.log(check([66, 101], 66) );       //, true);
console.log(check([101, 45, 75, 105, 99, 107], 107)); //, true);
console.log(check(['t', 'e', 's', 't'], 'e'));    //, true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //, false); */

// =============== Credit Card Mask ==============
//todo: Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// return masked string

/* const inp = "4556364607935616";

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("'5gp'")); */

//========== Sum of Digits / Digital Root =============
//todo: Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

/* function digitalRoot(n) {

  var z = n.toString(),
      i,
      y = 0;

  if (z.length === 1) {
      return +z;
  }
  for (i = 0; i < z.length; i++) {
      y += +z[i];
  }
  return digitalRoot(y);
} */

//===== решение 2 =====  !!!!!

/* function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(945)); */

//===== решение 3 =====

/* function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
} */

// ============== Opposites Attract ============================
//todo: Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

/* const isInLove = function (flower1, flower2) {

 return (flower1+flower2)%2 !== 0 ? true : false ;
// or
 return flower1 % 2 !== flower2 % 2;

}

console.log(isInLove(3,3)); */

// ====================== Square(n) Sum ===========================
// todo: Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// const squareSum = function(numbers) {

// return numbers.reduce((acc, item) => {
// acc += Math.pow(item, 2)
//  return acc
//  }, 0);

// }

// =================  рішення 2 !!!! ==============
/* function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

const numbers = [1, 2, 2];
console.log(squareSum(numbers)); */

// ======================  A square of squares ===========================
// todo: You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

/* function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
} */

// ====================== Hamming Distance  ===========================
// todo: The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2

// You can assume that the two input strings are of equal length.

// const a = 'I like turtles';
// const b = 'I like turkeys';

/* function hammingDistance(a, b) {
    let similarity = 0;

    const items_a = a.split('');
    const items_b = b.split('');

    items_a.map((item, index) => {
        if (items_a[index] !== items_b[index]) {
            similarity += 1;
        }
    });

    return similarity;
} */

// =======

/* function hammingDistance(a, b) {
    return a.split('').reduce((acc, item, index) => {
        if (a.split('')[index] !== b.split('')[index]) {
            acc += 1;
        }
        return acc;
    }, 0);
} */

// =======

/* function hamming(a,b) {
  return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
}

console.log(hamming(a, b)); */

// ===================== List Filtering =====================
// todo : In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// Kata.filterList(List.of(1, 2, "a", "b")) => List.of(1,2)
// Kata.filterList(List.of(1, 2, "a", "b", 0, 15)) => List.of(1,2,0,15)
// Kata.filterList(List.of(1, 2, "a", "b", "aasf", "1", "123", 231)) => List.of(1, 2, 231)

/* function listFiltering(...y) {
 return [...y].filter(item => typeof item === "number");
}

console.log(listFiltering(1, 2, "a", "b", "aasf", "1", "123", 231));
 
  */

// ===================== Mumbling =====================
// todo This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

/* function mumbling(str){
 return str
 .split("")
 .map((item, index) => item.repeat(index+1))
 .map((item, index) => item.replace(item[0],item[0].toUpperCase()))
 .join("-")
};

 console.log(mumbling("RqaEzty")); */

// ===================== Remove String Spaces =====================
// todo Simple, remove the spaces from the string, then return the resultant string.

/* const test = '8 j 8   mBliB8g  imjB8B8  jl  B';

function removeStringSpaces(input) {
 return input
 .split(" ")
 .join("")

// // or
//  return input.replace(/\s/g, '');

 };

 console.log(removeStringSpaces(test)); */

// ===================== Human Readable Time =====================
// todo: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript

/* function humanReadableTime(secTotal) {

let sec = 0;

if (secTotal >= 360000) {
  sec = secTotal%360000
} else {sec = secTotal}

let hours = Math.floor(sec/3600);
let minutes = Math.floor(sec/60%60);
let seconds = sec%60; */

//! при secTotal не виводит секунды
// return [hours,minutes,seconds]
//       .map(v => v < 10 ? "0" + v : v)
//       .filter((v,i) => v !== "00" || i > 0)
//       .join(":")

//======  решение 2
/* if (hours   < 10) {hours   = "0"+hours;}
if (minutes < 10) {minutes = "0"+minutes;}
if (seconds < 10) {seconds = "0"+seconds;}

var time    = hours+':'+minutes+':'+seconds;
return time;     */
//======  решение 3
/* function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
} */
//======  решение 4
/* function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds/3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds/60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
} */
//======  решение 5
/* function humanReadable(t) {
  function d(v) { return ('0' + v).slice(-2) }
  
  var s = t % 60;
  var m = (t / 60 | 0) % 60;
  var h = t / 3600 | 0;
  
  return d(h) + ':' + d(m) + ':' + d(s);
} */

/* };  // скобка первой функции

 console.log(humanReadableTime(0)); */

//- способы выводп текущей дати
// var d = new Date();
// console.log(d);
// var n = d.toLocaleTimeString();
// console.log(n);

//=========== Replace With Alphabet Position ===========
//todo: In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

/* const string = "The sunset sets at twelve o' clock";

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

 console.log(alphabetPosition(string)); */

// ================== Unique In Order ==========================
// todo: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

/* function uniqueInOrder(input) {
  let temp;
  let out = [];
  [...input].map(item => {
      if (temp !== item) {
          temp = item;
          out.push(item);
      }
  });

  return out;
} */

// ===== решение 2

/* var uniqueInOrder=function(input){
  return [...input].filter((a, i) => a !== iterable[i-1])
}
console.log(uniqueInOrder([1,2,2,3,3])); */

// ========================= persistence ==========================
// todo:  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

/* function persistence(input) {
    if (Number(input) < 10) {
        return 0;
    }

   let temp = [...input.toString()];

   temp = [...temp].reduce((acc, item, i) => (acc *= Number(item)), 1);

   while (temp >= 10){
    temp = [...(temp.toString())].reduce((acc, item, i) => (acc *= Number(item)), 1);
   }

    return temp;
} */

// ====== решение 2 ====== !!!

/* function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
} */

// ====== решение 3 ======

/* const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}

console.log(persistence("999")); */

// ========================= Counting Duplicates ===================
// todo: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times

// function duplicateCount(input) {
//   return [...input.toLowerCase()]

//   .sort()
//   .filter((item, index, array) => array[index] === array[index+1])
//   .filter((item, index, array) => array[index] !== array[index+1]).length
//   };

// ====== решение 2 ======

// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript

//  console.log(duplicateCount("indivisibility"));

// ========================= Exes and Ohs ===================
// todo: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

/* function exesAndOhs(input) {
return [...input.toLowerCase()].filter(item => item === "x").length ===
[...input.toLowerCase()].filter(item => item === "o").length;
 }; */

//console.log(exesAndOhs("zpzpzpp"));

// ========================= Create Phone Number ===================
// todo: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

/* const phoneNumber =' (123) 456-7890 ';

function createPhoneNumber(input) {

     const temp = [...input].join("").match(/[0-9]/g)

    console.log(temp);

    const partOne = temp.slice(0, 3).join('');
    const partTwo = temp.slice(3, 6).join('');
    const partThree = temp.slice(6, 10).join('');

    const phoneNumber = `(${partOne})${' '}${partTwo}${'-'}${partThree}`;
    return phoneNumber;
} */

//===== решение 2

/* function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
} */

// console.log(createPhoneNumber(phoneNumber));

// ================  Mexican Wave =====================
//todo:  In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules
// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const word = 'two words';

/* function wave(input) {
    return input.split('').map((letter, index) => {
        const arrayLetters = input.toLowerCase().split('');

        if (letter === ' ') {
            arrayLetters.splice(index + 1, 1, arrayLetters[index + 1].toUpperCase());
            return arrayLetters.join('');
        } else {
            arrayLetters.splice(index, 1, arrayLetters[index].toUpperCase());
            return arrayLetters.join('');
        }
    });
} */

/* 
function wave(str) {
  return str.split('').map((l, i, a) => {
    let c = a.slice();
    c[i] = c[i].toUpperCase();
    return c.join('');
  }).filter((w, i) => w[i] !== ' ');
} */

/* function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
} */

/* function wave(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}

console.log(wave(word)) */ // ====== Who likes it? ================================

// todo: You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//* Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// =========================================================

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}