let angka = 2;
let iterasi = 0;
// Tulis kode while loop di sini untuk pengkuadratan berulang
while (angka <= 1000) {
    let hasil = angka * angka;
    iterasi++;
    console.log("Iterasi " + iterasi + ": " + angka + "^2 = " + hasil);
    angka = hasil;
}

console.log("Angka " + 2 + " harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log("Hasil akhir: " + angka);