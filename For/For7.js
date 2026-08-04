let kata = "programming";
let jumlahVokal = 0;
// Tulis kode for loop di sini untuk menghitung vokal

for (let huruf = 0;
     huruf < kata.length;
     huruf++
) {
   // console.log(kata[huruf]) // fungsi untuk mengeja kata "programming"

  if(kata[huruf] == "a" || kata[huruf] == "i" || kata[huruf] == "u" || kata[huruf] == "e" || kata[huruf] == "o"){
    jumlahVokal++
  } 
} 

console.log("Jumlah vokal: " + jumlahVokal);
    
//console.log(huruf)
