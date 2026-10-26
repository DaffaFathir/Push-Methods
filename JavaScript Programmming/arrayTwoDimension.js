/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari nilai rata rata siswa, nilai rata rata mata pelajaran, dan nilai tertinggi pada mata pelajaran pada data berbentuk array 2 dimensi
  
  Example Data: 
  [
    ["Alice", 85, 90, 78], (pada setiap data terdapat nama yang ditunjukan pada indeks ke-0)
    ["Bob", 92, 88, 95], (nilai mata pelajaran matematika pada indeks ke-1)
    ["Carol", 78, 80, 85], (nilai mata pelajaran bahasa indonesia pada indeks ke-2)
    ["David", 65, 75, 70], (nilai mata pelajaran fisika pada indeks ke-3)
    ["Eve", 88, 82, 90]
  ]

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function nilaiRataRataSiswa(data, nama) {
  const siswa = data.find(
    (item) => item[0] === nama
  );

  if (!siswa) {
    return `Siswa ${nama} tidak ditemukan`;
  }

  const nilai = siswa.slice(1);
  const total = nilai.reduce((sum, n) => sum + n, 0);

  return total / nilai.length;
}

function nilaiRataRataMataPelajaran(data, mapelIndex) {
  const total = data.reduce(
    (sum, siswa) => sum + siswa[mapelIndex],
    0
  );

  return total / data.length;
}

function nilaiTertinggiMataPelajaran(data, mapelIndex) {
  return Math.max(
    ...data.map((siswa) => siswa[mapelIndex])
  );
}

// CASE VALUE
const dataNilai = [
  ["Alice", 85, 90, 78],
  ["Bob", 92, 88, 95],
  ["Carol", 78, 80, 85],
  ["David", 65, 75, 70],
  ["Eve", 88, 82, 90]
];

// TEST CASE
//console.log(nilaiRataRataSiswa(dataNilai, 'David'))  cari nilai rata-rata siswa David
//console.log(nilaiRataRataMataPelajaran(dataNilai, 2))  cari nilai rata-rata mapel bahasa-indonesia dari seluruh siswa
//console.log(nilaiTertinggiMataPelajaran(dataNilai, 3))  cari nilai tertinggi pada mapel fisika dari seluruh siswa

console.log(JSON.stringify([nilaiRataRataSiswa(dataNilai, "David"), nilaiRataRataMataPelajaran(dataNilai, 2), nilaiTertinggiMataPelajaran(dataNilai, 3)]).replace(/,/g, ", "));