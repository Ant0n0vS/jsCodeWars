/*
Write a function dirReduc which will take an array of strings and 
returns an array of strings with the needless directions removed 
(W<->E or S<->N side by side).
*/

function dirReduc(arr){
    let l = arr.length;
    for (let i = 0; i < l / 2; i++) {
        for (let j = 0; j < l - 1; j++) {
            if ((arr[j] == "NORTH" && arr[j + 1] == "SOUTH") || 
            (arr[j + 1] == "NORTH" && arr[j] == "SOUTH") || 
            (arr[j] == "EAST" && arr[j + 1] == "WEST") || 
            (arr[j + 1] == "EAST" && arr[j] == "WEST")) {
                arr.splice(j, 2);
            }
        }
    }
    return arr;
}