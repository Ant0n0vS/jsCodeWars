//Highest Scoring Word (6 kyu)
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

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
