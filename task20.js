//Sum of pairs (5 kyu)
//https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
    var seen = {};
    for (let i = 0; i < ints.length; i++) {
        let num = ints[i];
        if (seen[s - num]) {
            return [s - num, num];
        }
        seen[num] = true;
    }
} 