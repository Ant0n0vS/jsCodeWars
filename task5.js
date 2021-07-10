/*
Welcome. In this kata, you are asked to square every digit of a number 
and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, 
because 9^2 is 81 and 1^2 is 1.
*/
function squareDigits(num){
    if (num == 0) {
        return 0;
    }  
    let newNum = ''; str = String(num);
    for (let i = 0; i < str.length; i++) {
        newNum += Number(str[i]) ** 2;
    }
    return Number(newNum);
}