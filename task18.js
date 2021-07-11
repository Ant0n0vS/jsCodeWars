//What's a Perfect Power anyway? (5 kyu)
//https://www.codewars.com/kata/54d4c8b08776e4ad92000835

var isPP = function(n){
    let arr = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        for (let j = 1; j <= Math.log(n) / Math.log(2); j++) {
            if (n == i ** j) {
                arr = [i, j];
                break;
            }
        }
    }
    return (arr.length === 0) ? null : arr;
}
