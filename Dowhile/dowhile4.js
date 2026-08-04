const prompt = require("prompt-sync")()
let dadu;
let mainLagi;
let totalSkor = 0;
// Tulis kode do-while loop di sini untuk game dadu
do {
    console.log("Melempar dadu...");
    dadu = Math.floor(Math.random() * 6) + 1;
    console.log("Hasil: " + dadu);

    if (dadu === 6) {
        console.log("JACKPOT! Bonus lemparan!");
    }

    totalSkor += dadu;
    console.log("Total skor: " + totalSkor);

    mainLagi = prompt("Main lagi? (y/n): ");

} while (mainLagi === "y");

console.log("Game selesai! Total skor: " + totalSkor);