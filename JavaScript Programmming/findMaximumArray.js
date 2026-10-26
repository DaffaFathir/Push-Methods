/* 
  Author: zikrimansyursyah
  
  Case : Tugas anda adalah menemukan nilai terbesar pada data array berikut

  Example Input: [3, 8, 1, 9, 4, 6]
  Example Output: Maximum value of arrCase1 : 9

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .sort() .filter() dll
  - tampikan expected output dengan console.log()
  - ujicoba dengan case array yang telah disediakan
*/

function cariNilaiMaksimum(arr) {
  if (arr.length === 0) {
    return "Array kosong";
  }

  let maksimum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maksimum) {
      maksimum = arr[i];
    }
  }

  return maksimum;
}

// CASE VALUE
const arrCase1 = [0, 6, 8, 13, 6, 5, 3, 9, 34, 1, 2, 8, 4];
const arrCase2 = [4.58, 7.78, 5.58, 5.15, 3, 4, 2.41, 4.53, 1, 5, 2.68, 1, 9, 6.39, 6];
const arrCase3 = [5, 0.88, 6.25, 5, 5.48, 1, 6, 6.1, 2, 9.33, 6, 9.59,6, 0.36, 8.14, 9, 0,4.94, 4.81, 3.03, 6.23, 4.92];
const arrCase4 = [0, 5, 5, 8, 4,8.56, 7.85, 0, 8,8, 5.61, 6.79, 1];

// TEST CASE
console.log('Maximum value of arrCase1 : ', cariNilaiMaksimum(arrCase1));
console.log('Maximum value of arrCase2 : ', cariNilaiMaksimum(arrCase2));
console.log('Maximum value of arrCase3 : ', cariNilaiMaksimum(arrCase3));
console.log('Maximum value of arrCase4 : ', cariNilaiMaksimum(arrCase4));