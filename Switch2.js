let pilihan = 2;
let menu;
let Harga;
// Tulis kode switch statement di sini
switch (pilihan) {
    case 1:
        menu = "Nasi Goreng"
        Harga = "Rp 15000"
        break;
    case 2:
        menu = "Mie Ayam"
        Harga = "Rp 12000"
        break;
    case 3:
        menu = "Bakso"
        Harga = "Rp 10000"
        break;
     case 4:
        menu = "Es Teh"
        Harga =  "Rp 5000"
        break;

    default:
        console.log("Menu Tidak Tersedia")
        break;
}       
        console.log("Anda Memilih: " + menu)
        console.log("Harga: " + Harga)