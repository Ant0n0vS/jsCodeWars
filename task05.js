//Square Every Digit (7 kyu)
//https://www.codewars.com/kata/546e2562b03326a88e000020

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
