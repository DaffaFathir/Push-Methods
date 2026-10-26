/* 
  Author: zikrimansyursyah
  
  Case : Tugas anda adalah mencari index suatu elemen dalam array, wajib menggunakan metode binary search 

  metode binary search bekerja dengan membagi array menjadi dua bagian dan memeriksa elemen tengah, kemudian mempersempit pencarian berdasarkan hasil perbandingan. Implementasikan pencarian ini dalam bentuk rekursif
  perlu diingat metode binary search wajib dilakukan sorting terlebih dahulu

  Example Input: [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3]
  Example search input: 6
  Example Output: 
  - Indeks elemen 6 adalah :  11
  - Indeks elemen 8 adalah :  13
  - Indeks elemen 3 adalah :  5 
  - Indeks elemen 4 adalah :  7 

  Notes: 
  - dilarang menggunakan array prototype seperti .find() .sort() .findIndex() dll
  - tampikan expected output dengan console.log()
*/

function cariValueIndeks(array, target) {
  // Salin nilai dan simpan indeks aslinya
  const data = [];

  for (let i = 0; i < array.length; i++) {
    data[i] = {
      nilai: array[i],
      indeksAsli: i
    };
  }

  // Sorting manual tanpa .sort()
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j].nilai > data[j + 1].nilai) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  // Binary Search rekursif
  function binarySearch(kiri, kanan) {
    if (kiri > kanan) {
      return -1;
    }

    const tengah = Math.floor((kiri + kanan) / 2);

    if (data[tengah].nilai === target) {
      return data[tengah].indeksAsli;
    }

    if (target < data[tengah].nilai) {
      return binarySearch(kiri, tengah - 1);
    }

    return binarySearch(tengah + 1, kanan);
  }

  return binarySearch(0, data.length - 1);
}

// CASE VALUE
const array = [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3];

// TEST CASE 
console.log('Indeks elemen 6 adalah : ', cariValueIndeks(array, 6));
console.log('Indeks elemen 8 adalah : ', cariValueIndeks(array, 8));
console.log('Indeks elemen 3 adalah : ', cariValueIndeks(array, 3));
console.log('Indeks elemen 4 adalah : ', cariValueIndeks(array, 4));