String.prototype.toJadenCase = function (str) {

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

console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));
