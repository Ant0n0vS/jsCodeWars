//Rot13 (5 kyu)
/*
Create a function that takes a string and returns the string ciphered with 
Rot13. If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english 
alphabet should be shifted, like in the original Rot13 "implementation".
*/

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