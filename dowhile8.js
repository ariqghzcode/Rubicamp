const prompt = require("prompt-sync")()
let namaDepan = "user";
let username;
let puas;
let percobaan = 0;
// Tulis kode do-while loop di sini untuk generate username
do {
    percobaan++;
    
    let angkaRandom = Math.floor(Math.random() * 9000) + 1000;
    username = namaDepan + angkaRandom;

    console.log("Percobaan " + percobaan + ": Username yang dihasilkan: " + username)
    puas = prompt("Apakah Anda puas dengan username ini? (y/n): ");

} while (puas === "n");
console.log("Username final: " + username + " (dibuat dalam " + percobaan + " percobaan)");