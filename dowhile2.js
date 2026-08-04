const prompt = require("prompt-sync")()
let saldo = 100000;
let pilihan;
let lanjut;
// Tulis kode do-while loop di sini
do {
    console.log("=== ATM MENU ===");
    console.log("1. Cek Saldo");
    console.log("2. Tarik Tunai");
    console.log("3. Setor Tunai");
    console.log("4. Keluar");
    pilihan = prompt("Pilih menu: ");




    if (pilihan === "1") {
        console.log("Saldo Anda: Rp " + saldo);
    } else if (pilihan === "2") {
        let jumlah = Number(prompt("Masukkan jumlah: "));
        if (jumlah > saldo) {
            console.log("Saldo tidak mencukupi!");
        } else {
            saldo -= jumlah;
            console.log("Penarikan berhasil. Saldo: Rp " + saldo);
        }
    } else if (pilihan === "3") {
        let jumlah = Number(prompt("Masukkan jumlah: "));
        saldo += jumlah;
        console.log("Setoran berhasil. Saldo: Rp " + saldo);

    } else if (pilihan === "4") {
        console.log("Keluar dari menu...");
    } else {
        console.log("Pilihan tidak valid!");
    } 
    
    while (lanjut !== "y" && lanjut !== "n") {
        console.log("Input tidak valid! Harap masukkan 'y' atau 'n'.");
        lanjut = prompt("Apakah ingin melakukan transaksi lain? (y/n): ");
    }
        lanjut = prompt("Apakah ingin melakukan transaksi lain? (y/n): ");
        
} while (lanjut === "y")

console.log("Terima kasih telah menggunakan ATM!");

