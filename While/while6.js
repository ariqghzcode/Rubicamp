const prompt = require("prompt-sync")()
let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;
// Tulis kode while loop di sini untuk validasi password
while (!berhasil && percobaan < maxPercobaan) {
    password = prompt("Masukkan password: ");
    percobaan++;

    if (password === "admin123") {
        berhasil = true;
    } else {
        console.log("Password salah. Sisa percobaan: " + (maxPercobaan - percobaan));
    }
}
if (berhasil) {
    console.log("Login berhasil!");
} else {
    console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}