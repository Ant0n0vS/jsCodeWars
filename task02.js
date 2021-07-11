//IQ Test (6 kyu)
//https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
    let even = 0, num = 0;
    numArr = numbers.split(" ");
    for (let i = 0; i < numArr.length; i++) {
        even += (numArr[i] % 2 == 0) ? 0 : 1; 
    }
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0 && even > 1) {
            num = ++i;
        }
        if (numArr[i] % 2 == 1 && even == 1) {
            num = ++i;
        }
    }
    return num;
}
