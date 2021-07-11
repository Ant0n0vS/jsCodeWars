//Array.diff (6 kyu)
//https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    let newArr = a.filter(x => !b.includes(x));  
    return newArr;
}
