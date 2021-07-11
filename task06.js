//Two to One (7 kyu)
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    let mainLine = s1 + s2;
    let arr = mainLine.split('').sort();
    let uniqArr = arr.filter(function(letter, pos) {
        return arr.indexOf(letter) == pos;
    });
    return uniqArr.join('');
}
