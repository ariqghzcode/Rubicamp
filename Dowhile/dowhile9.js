const prompt = require("prompt-sync")()
let tahapInstalasi = ["Download file", "Extract file", "Install program", "Setup konfigurasi"];
let berhasil = false;
let percobaan = 0;
let lanjut;
// Tulis kode do-while loop di sini untuk simulasi instalasi
do {
   
    percobaan++;
    console.log("=== PERCOBAAN INSTALASI " + percobaan + " ===");
    
    for (let i = 0; i < tahapInstalasi.length; i++) {
    let sukses = true;  

    if (sukses) {
        console.log(tahapInstalasi[i] + "... berhasil");
    } else {
        console.log(tahapInstalasi[i] + "... GAGAL!");
        gagal = true;
        break;
    }
}

} while (!berhasil && lanjut === "y");


if (berhasil) {
  console.log("Instalasi berhasil dalam " + percobaan + " percobaan!");
} else {
  console.log("Instalasi dibatalkan setelah " + percobaan + " percobaan.");
}