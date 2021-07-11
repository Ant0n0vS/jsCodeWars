//Rot13 (5 kyu)
//https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
    let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encodedMess = '';
    for (let i = 0; i < message.length; i++) {
        let pos = str1.indexOf(message[i]);
        encodedMess += (pos !== -1) ? str2[pos] : message[i];
    }
    return encodedMess;
}
