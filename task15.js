//List Filtering (7 kyu)
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filterList(l) {
    for (let i = l.length - 1; i >= 0; i--) {
        if (typeof(l[i]) != 'number') {
            l.splice(i, 1);
        }
    }
    return l;
}
