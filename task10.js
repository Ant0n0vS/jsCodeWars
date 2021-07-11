//Directions Reduction (5 kyu)
//https://www.codewars.com/kata/550f22f4d758534c1100025a

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
