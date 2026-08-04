const prompt = require("prompt-sync")()
let password;
let valid = false;
// Tulis kode do-while loop di sini untuk validasi password
do {
    password = prompt("Buat Password Anda: ");
    let panjangCukup = password.length >= 6;

    let adaAngka = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9")
            adaAngka = true;
    }
    
    if (panjangCukup && adaAngka) {
        valid = true;
        console.log("Password valid!");
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

} while (!valid);
console.log("Password berhasil dibuat: " + password);