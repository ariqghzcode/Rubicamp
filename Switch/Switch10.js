let bahasa = "EN";
// Tulis kode switch statement di sini
switch (bahasa) {
    case "ID":
        console.log("Language: Bahasa Indonesia")
        console.log("Selamat Datang! Ada yang bisa dibantu hari ini?")
        break;
    case "EN":
        console.log("Language: English")
        console.log("Welcome! How can we help you today?")
        break;
    case "JP":
        console.log("Language: Japanese")
        console.log("いらっしゃいませ！何かお手伝いできることはありますか？")
        break;
    case "KR":
        console.log("Language: Korean")
        console.log("환영합니다! 오늘 무엇을 도와드릴까요?")
        break;

    default:
        console.log("Language Not Supported")
        break;
}