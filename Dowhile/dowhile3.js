const prompt = require("prompt-sync")()
let password;
let valid = false;
// Tulis kode do-while loop di sini untuk validasi password
do {
    password = prompt("Buat Password Anda: "); //masukkan password
    let panjangCukup = password.length >= 6;   //kondisi password minimal 6 karakter

    let adaAngka = false; //kondisi awal false agar loop 
    for (let i = 0; i < password.length; i++) {  
        if (password[i] >= "0" && password[i] <= "9") //harus ada karakter dari 0-9 agar kondisi true dan loop berakhir
            adaAngka = true; //deklarasi true mengakhiri loop
    }

    if (panjangCukup && adaAngka) { //kondisi password diterima dan valid
        valid = true;
        console.log("Password valid!");
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

} while (!valid); // artinya NOT valid "Selama password BELUM valid, terus ulangi looping."
console.log("Password berhasil dibuat: " + password);