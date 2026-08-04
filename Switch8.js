let statusCode = 404;
// Tulis kode switch statement di sini
switch (statusCode) {
    case 200:
        console.log("Status " + statusCode + ": OK")
        break;
    case 404:
        console.log("Status " + statusCode + ": Not Found - Halaman tidak ditemukan")
        break;
    case 500:
        console.log("Status " + statusCode + ": Internal Server Error")
        break;
    case 403:
        console.log("Status " + statusCode + ": Forbidden")
        break;
    default:
        console.log("Unknown Status")
        break;
}