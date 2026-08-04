const prompt = require("prompt-sync")()
let tahap = ["Mengisi air", "Mencuci", "Membilas", "Mengeringkan"];
let tambahBilas;
let siklusSelesai = 0;
// Tulis kode do-while loop di sini untuk simulasi mesin cuci
do {
    siklusSelesai++;
    console.log("=== SIKLUS PENCUCIAN " + siklusSelesai + " ===");

    for (let i = 0; i < tahap.length; i++) {
        console.log(tahap[i] + "... selesai");
    }

    tambahBilas = prompt("Tambah siklus pembilasan? (y/n): ");
}

while (tambahBilas === "y");

console.log("Mesin cuci selesai! Total siklus: " + siklusSelesai);