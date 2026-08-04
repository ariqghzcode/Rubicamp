let angka1 = 10;
let angka2 = 3;
let operator = "/";
let result;
// Tulis kode if-else if-else statement di sini
if (operator == "+") {
    result = angka1 + angka2

} else if (operator == "-") {
    result = angka1 - angka2

} else if (operator == "*") {
    result = angka1 * angka2

} else if (operator == "/") {
    result = angka1 / angka2

} 

if (result) {
    console.log(angka1 + operator + angka2 + " = " + result)

} else {
    console.log(`Operator tidak valid`)
}
