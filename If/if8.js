let berat = 70; // kg
let tinggi = 1.75; // meter
// Hitung BMI terlebih dahulu
const BMI = berat / tinggi * tinggi
// Tulis kode if-else if-else statement di sini
if (BMI < 18.5) {
    result = "Underweigth"
} if (BMI < 25) {
    result = "Normal"
} if (BMI < 30) {
    result = "Overweigth"
} else {
    result = "obese"
}
console.log(`
BMI: ${BMI}
Kategori: ${result}
    `)