let waktu = 10;
let tombolDitekan = false;
// Simulasi: tombol akan ditekan pada detik ke-7
// Tulis kode while loop di sini untuk countdown timer
while (waktu > 0 && !tombolDitekan) {
    console.log("Countdown: " + waktu);

    if (waktu === 7) {
        tombolDitekan = true;
    } else {
        waktu--;
    }
}

if (tombolDitekan) {
  console.log("Timer dihentikan oleh user pada detik ke-" + waktu);
} else {
  console.log("Countdown selesai!");
}