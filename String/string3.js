// Tulis function convertCase di sini
function convertCase(text, mode) {
    if (mode === "upper") {
        return text.toUpperCase(); //Uppercase
    } else if (mode === "lower") {
        return text.toLowerCase(); //Lowercase
    } else if (mode === "title") {
        let words = text.split(" "); // pecah jadi array kata
        let titleWords = [];

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let firstLetter = word.charAt(0).toUpperCase(); // huruf pertama jadi besar
            let restLetters = word.slice(1).toLowerCase();  // sisa huruf jadi kecil
            titleWords.push(firstLetter + restLetters);
        }

        return titleWords.join(" "); // gabungkan lagi jadi kalimat
    }
}
console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));