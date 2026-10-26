/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung perpangkatan

  Example Input: 
  - angka : 2
  - pangkat : 5

  Expected Output: 'Hasil dari 2 pangkat 5 adalah 32'

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function hitungPerpangkatan(angka, pangkat) {
  let hasil = 1;

  for (let i = 0; i < pangkat; i++) {
    hasil = hasil * angka;
  }

  return hasil;
}


// TEST CASE
console.log('Hasil dari 2 pangkat 5 adalah : ', hitungPerpangkatan(2, 5))
console.log('Hasil dari 3 pangkat 7 adalah : ', hitungPerpangkatan(3, 7))
console.log('Hasil dari 2 pangkat 12 adalah : ', hitungPerpangkatan(2, 12))
console.log('Hasil dari 4 pangkat 4 adalah : ', hitungPerpangkatan(4, 4))