const prompt = require("prompt-sync")()
let angka = prompt("masukkan angka : ");
// Tulis kode while loop di sini untuk validasi input
while (isNaN(angka) || angka < 1 || angka > 10) {
    console.log("Input tidak valid, masukkan angka 1-10")
    angka = prompt("masukkan angka : ");
}
console.log("Angka valid yang dimasukkan: " + angka);