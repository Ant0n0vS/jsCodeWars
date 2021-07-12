//Sum of Digits / Digital Root (6 kyu)
//https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    var line = "" + n;
    var sum = 0;
    for (let i = 0; i < line.length; i++) 
        sum += +line[i];
    return (sum > 9) ? digital_root(sum) : sum;
}
  