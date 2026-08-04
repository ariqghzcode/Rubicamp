// Tulis function processOrder di sini
function processOrder(namaItem, jumlah) {
    console.log(`${"=== Detail Pesanan  ==="}
Item: ${namaItem} 
Jumlah: ${jumlah} 
Harga per Item: ${15000}
Subtotal: ${jumlah * 15000}`)
return jumlah * 15000
}
// Panggil function dan gunakan return value
let totalBayar1 = processOrder("Nasi Goreng", 2);
let totalBayar2 = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));