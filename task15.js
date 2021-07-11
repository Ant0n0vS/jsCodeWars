//List Filtering (7 kyu)
/*
In this kata you will create a function that takes a list of non-negative
 integers and strings and returns a new list with the strings filtered out.
*/
function filterList(l) {
    for (let i = l.length - 1; i >= 0; i--) {
        if (typeof(l[i]) != 'number') {
            l.splice(i, 1);
        }
    }
    return l;
}