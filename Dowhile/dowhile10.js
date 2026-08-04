let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;
// Tulis kode do-while loop di sini untuk simulasi antrian bank
do {
    let nasabah = antrian.shift();
    nasabahDilayani++;
    console.log("Melayani nasabah: " + nasabah);

    if (antrian.length > 0) {
        console.log("Sisa antrian: " + antrian.length + " orang");
    } else {
        console.log("Antrian kosong.");
        adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n): ");

        if (adaNasabahBaru === "y") {
            let nasabahBaru = prompt("Nama nasabah baru: ");
            console.log("Nasabah baru: " + nasabahBaru);
            antrian.push(nasabahBaru);
        }
    }

} while (antrian.length > 0);
console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);