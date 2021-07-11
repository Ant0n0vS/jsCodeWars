//Categorize New Member (7 kyu)
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    let membersArr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        membersArr.push('Senior');
      }
      else {
        membersArr.push('Open');
  }
    }
    return membersArr;
  }
