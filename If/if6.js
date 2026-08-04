let totalBelanja = 150000;
let diskon;
// Tulis kode if-else if statement di sini
if (totalBelanja >= 500000) {
    diskon = 20
} else if (totalBelanja >= 200000) {
    diskon = 10
} else if (totalBelanja >= 100000) {
    diskon = 5
}
let totalbayar = totalBelanja - (totalBelanja * (diskon / 100))
console.log("Total belanja: Rp " + totalBelanja);
console.log("Diskon: " + diskon + "%");
console.log("Total bayar: Rp " + totalbayar)