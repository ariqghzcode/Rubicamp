// Tulis function getCurrentTime di sini
function getCurrentTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const hasil = `${h}:${m}:${s}`;
    return hasil
}
// Panggil function dan simpan hasilnya
let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);