const prompt = require("prompt-sync")()
let angkaRahasia = 7;
let tebakan;
let percobaan = 0;
// Tulis kode while loop di sini untuk game tebak angka
while (Number(tebakan) !== angkaRahasia) {
    tebakan = (prompt("Masukkan angka: "));
    percobaan++

    if (Number(tebakan) > angkaRahasia) {
        console.log("Terlalu besar! coba lagi.")
    }
    else if (Number(tebakan) < angkaRahasia) {
        console.log("Terlalu kecil! coba lagi.")
    }

}
console.log("Selamat! Anda berhasil menebak dalam " + percobaan + " percobaan");