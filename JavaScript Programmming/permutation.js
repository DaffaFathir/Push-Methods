/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari kombinasi unik dari sebuah huruf pada string

  Example Input: xyz

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function cariKataKombinasi(string) {
  const hasil = [];

  function permutasi(sisa, kata) {
    if (sisa.length === 0) {
      if (!hasil.includes(kata)) {
        hasil.push(kata);
      }
      return;
    }

    for (let i = 0; i < sisa.length; i++) {
      const huruf = sisa[i];
      const sisaBaru = sisa.slice(0, i) + sisa.slice(i + 1);

      permutasi(sisaBaru, kata + huruf);
    }
  }

  permutasi(string, "");

  return hasil;
}

// TEST CASE
console.log(cariKataKombinasi('abc'))
console.log(cariKataKombinasi('zzz'))
console.log(cariKataKombinasi('wow'))
console.log(cariKataKombinasi('cool'))