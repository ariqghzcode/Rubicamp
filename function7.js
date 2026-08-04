// Tulis function createProfile di sini
function createProfile(nama, status="member") {
    return `profil: ${nama} (${status})` 
}
// Panggil function dengan dan tanpa parameter kedua
let profil1 = createProfile("Budi");
let profil2 = createProfile("Sari", "Admin");
console.log(profil1);
console.log(profil2);