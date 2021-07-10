/*
Given an integral number, determine if it's a square number:
"In mathematics, a square number or perfect square is an integer that 
is the square of an integer; in other words, it is the product of some 
integer with itself."
*/

var isSquare = function(n) {
    return (n ** 0.5 % 1 == 0);
}
