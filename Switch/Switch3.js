let grade = "B";
// Tulis kode switch statement di sini
switch (grade) {
    case "A":
      nilai = "A"
      Predikat = "Sangat Baik"  
        break;
    case "B":
      nilai = "B"
      Predikat = "Baik" 
        break;
    case "C":
      nilai = "C"
      Predikat = "Cukup"   
        break;
    case "D":
      nilai = "D"
      Predikat = "Kurang"  
        break;
    case "E":
      nilai = "E"
      Predikat = "Sangat Kurang"   
        break;
    default:
        console.log("Grade Tidak Valid")
        break;
}
console.log("Grade " + nilai + ": " + Predikat)