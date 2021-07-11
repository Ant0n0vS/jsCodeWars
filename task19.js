//Magnet particules in boxes (4 kyu)
//https://www.codewars.com/kata/56c04261c3fcf33f2d000534

function doubles(maxk, maxn) {
    let sum = 0;
    for (let i = 1; i <= maxk; i++) {
        for (let j = 1; j <= maxn; j++) {
            sum += 1 / (i * (j + 1) ** (2 * i));
        }
    }
    return sum;
}