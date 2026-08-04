let angka = 100;
let langkah = 0;
// Tulis kode while loop di sini untuk pembagian berulang
while (angka >= 1 ) {
    let hasil = angka / 2;
    langkah++;
    console.log("Langkah " + langkah + ": " + angka + "/ 2 = " + hasil)
    angka = hasil;
}
console.log("Proses selesai setelah " + langkah + " langkah");