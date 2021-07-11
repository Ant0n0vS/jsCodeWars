//Counting sheep... (8 kyu)
//https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
    let sheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) { 
      sheeps += (arrayOfSheep[i]) ? 1 : 0;
    }
    return sheeps;
}
