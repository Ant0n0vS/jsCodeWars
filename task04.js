//Jaden Casing Strings (7 kyu)
//https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    let arr = this.split(' ');
    let upperWords = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i][0].toUpperCase() + arr[i].slice(1);
        upperWords.push(word);
    }
    return upperWords.join(" ");
};
