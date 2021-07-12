//Multiples of 3 or 5 (6 kyu)
//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
    var sum = 0;
    for (let i = 3; i < number; i++) {
        sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;
    }
    return sum;
}