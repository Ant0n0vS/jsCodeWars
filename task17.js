//Regex Password Validation (5 kyu)
//https://www.codewars.com/kata/52e1476c8147a7547a000811

function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w{6,}$/m.test(password);
}
