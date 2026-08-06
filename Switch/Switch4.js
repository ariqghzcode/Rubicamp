let bulan = 1;
let namaBulan = { 
    1: "Januari",
    2: "Februari",
    3: "Maret",
    4: "April",
    5: "Mei",
    6: "Juni",
    7: "Juli",
    8: "Agustus",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
}
// Tulis kode switch statement di sini
switch (bulan) {
    case 2:
        console.log(`Bulan ke-${bulan} (${namaBulan[bulan]}) memiliki 28 Hari`)
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Bulan ke-${bulan} (${namaBulan[bulan]}) memiliki 30 Hari`)
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Bulan ke-${bulan} (${namaBulan[bulan]}) memiliki 31 Hari`)
        break;
    default:
        break;
}
