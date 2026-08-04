let angka1 = 15;
let angka2 = 4;
let operator = "%";
// Tulis kode switch statement di sini
switch (operator) {
    case "+":
        console.log( angka1 + operator + angka2 + " = " + (angka1 + angka2))
        break;
    case "-":
        console.log( angka1 + operator + angka2 + " = " + (angka1 - angka2))
        break;
    case "*":
        console.log( angka1 + operator + angka2 + " = " + (angka1 * angka2))
        break;
    case "/":
        console.log( angka1 + operator + angka2 + " = " + (angka1 / angka2))
        break;
    case "%":
        console.log( angka1 + " " + operator + " " + angka2 + " = " + (angka1 % angka2))
        break;
    default:
        break;
}