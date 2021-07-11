//Highest Scoring Word (6 kyu)
/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the 
alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest 
in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(line){
    let arr = line.split(' ');
    let maxSum = 0; word = '';
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j].charCodeAt(0) - 96;
        }
        if (sum > maxSum) {
            maxSum = sum;
            word = arr[i];
        }
    }
    return word;
}