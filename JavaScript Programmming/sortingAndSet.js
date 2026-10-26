/* 
  Author: zikrimansyursyah
  
  Case : 
  - terdapat sejumlah data calon mahasiswa (pendaftar) yang telah di deklarasikan pada variabel pendaftar
  - kemudian anda diminta untuk menambahkan value grade pada setiap data pendaftar
  - acuan pemberian value grade dengan menggunakan score
    A: 85-100
    B: 70-84
    C: 55-69
    D: 40-54
    E: 0-39

  Example Input: (pada variabel pendaftar)
  Expected Output: 
  [
    { name: "Andi", score: 85, grade: "A" },
    { name: "Budi", score: 70, grade: "B" },
    { name: "Citra", score: 92, grade: "A" },
    { name: "Dewi", score: 78, grade: "B" },
    { name: "Eko", score: 60, grade: "C" },
    { name: "Fika", score: 88, grade: "A" },
    { name: "Gita", score: 75, grade: "B" },
    { name: "Hendra", score: 81, grade: "A" },
    { name: "Indra", score: 67, grade: "C" },
    { name: "Joko", score: 94, grade: "A" },
    { name: "Krisna", score: 72, grade: "B" },
    { name: "Lia", score: 89, grade: "A" },
    { name: "Mira", score: 63, grade: "C" },
    { name: "Nanda", score: 77, grade: "B" },
    { name: "Oscar", score: 83, grade: "A" }
  ]

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .sort() .filter() dll
  - tampikan expected output dengan console.log()
*/

function tambahkanGrade(data) {
  for (let i = 0; i < data.length; i++) {
    const score = data[i].score;

    if (score >= 85 && score <= 100) {
      data[i].grade = "A";
    } else if (score >= 70) {
      data[i].grade = "B";
    } else if (score >= 55) {
      data[i].grade = "C";
    } else if (score >= 40) {
      data[i].grade = "D";
    } else {
      data[i].grade = "E";
    }
  }

  return data;
}

// CASE VALUE
const pendaftar = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 70 },
  { name: "Citra", score: 92 },
  { name: "Dewi", score: 78 },
  { name: "Eko", score: 60 },
  { name: "Fika", score: 88 },
  { name: "Gita", score: 75 },
  { name: "Hendra", score: 81 },
  { name: "Indra", score: 67 },
  { name: "Joko", score: 94 },
  { name: "Krisna", score: 72 },
  { name: "Lia", score: 89 },
  { name: "Mira", score: 63 },
  { name: "Nanda", score: 77 },
  { name: "Oscar", score: 83 }
];

// TEST CASE
console.log(tambahkanGrade(pendaftar));