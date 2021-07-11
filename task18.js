//What's a Perfect Power anyway? (5 kyu)
/*
Your task is to check wheter a given integer is a perfect power. If it is a 
perfect power, return a pair m and k with m^k = n as a proof. Otherwise 
return Nothing, Nil, null, NULL, None or your language's equivalent.
*/

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