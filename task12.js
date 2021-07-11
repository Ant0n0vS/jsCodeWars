//Find the next perfect square! (7 kyu)
//https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
    return (sq ** 0.5 % 1 == 0) ? (sq ** 0.5 + 1) ** 2 : -1; 
}
