let teks = "   hello world   ";
let langkah = 0;

while (teks[0] === " ") {
    teks = teks.substring(1);
    langkah++;
    console.log("Langkah " + langkah + ": '" + teks + "'");
}

console.log("Hasil akhir: '" + teks + "'");
console.log("Total spasi yang dihapus: " + langkah);