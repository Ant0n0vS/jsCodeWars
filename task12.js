//Find the next perfect square! (7 kyu)
/*
Complete the findNextSquare method that finds the next integral perfect 
square after the one passed as a parameter. Recall that an integral
perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be 
returned. You may assume the parameter is non-negative.
*/

function findNextSquare(sq) {
    return (sq ** 0.5 % 1 == 0) ? (sq ** 0.5 + 1) ** 2 : -1; 
}