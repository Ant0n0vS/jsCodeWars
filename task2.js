/*
Bob is preparing to pass IQ test. The most frequent task in this test is 
to find out which one of the given numbers differs from the 
others. Bob observed that one number usually differs from the others 
in evenness. Help Bob — to check his answers, he needs a program that 
among the given numbers finds one that is different in evenness, and 
return a position of this number.
Keep in mind that your task is to help Bob solve a real IQ test, 
which means indexes of the elements start from 1 (not 0)
*/

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