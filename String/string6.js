// Tulis function processWords di sini
function processWords(sentence) {

    let words = sentence.split(" ");   // pecah kalimat jadi array kata
    let count = words.length;          // hitung jumlah kata
    
    let reversedWords = [...words];    // salin array agar words asli tidak berubah
    reversedWords.reverse();           // balik urutan salinannya

    let reversed = reversedWords.join(" "); // gabungkan lagi jadi string

    return {
        words: words,
        count: count,
        reversed: reversed
    }
}
console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));