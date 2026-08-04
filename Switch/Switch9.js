let tombol = "SPACE";
// Tulis kode switch statement di sini
switch (tombol) {
    case "W":
        console.log("Tombol " + tombol + ": Karakter maju!")
        break;
    case "S":
        console.log("Tombol " + tombol + ": Karakter mundur!")
        break;
    case "A":
        console.log("Tombol " + tombol + ": Karakter kiri!")
        break;
    case "D":
        console.log("Tombol " + tombol + ": Karakter kanan!")
        break;
    case "SPACE":
        console.log("Tombol " + tombol + ": Karakter melompat!")
        break;
    case "ESC":
        console.log("Tombol " + tombol + ": Pause")
        break;
    default:
        break;
}