# Employee Management API

## 1. Nama Project

**Employee Management API** adalah REST API untuk mengelola data karyawan menggunakan Node.js, Express.js, dan MySQL. API ini menyediakan fitur untuk melihat, menambahkan, memperbarui, dan menghapus data karyawan, serta validasi input pada request POST dan PUT.

## 2. Cara Menjalankan Project

### Persyaratan

Pastikan aplikasi berikut sudah terpasang:
- Node.js dan npm
- MySQL Server
- MySQL Workbench (untuk mengelola database)
- Postman (untuk pengujian API)

### Langkah Instalasi

1. Buka folder project melalui VS Code.
2. Buka terminal pada folder project.
3. Instal dependencies dengan perintah:

   ```bash
   npm install
   ```

4. Jalankan query SQL pada file `database.txt` melalui MySQL Workbench untuk membuat database, tabel, dan data awal.
5. Buat file `.env` berdasarkan `.env.example`, kemudian sesuaikan konfigurasi database.
6. Jalankan aplikasi menggunakan perintah:

   ```bash
   npm start
   ```

Jika aplikasi berhasil berjalan, server dapat diakses melalui:

`http://localhost:3000`

## 3. Konfigurasi Database

Project ini menggunakan MySQL dengan nama database `employee_db` dan tabel `employees`.

Konfigurasi database disimpan pada file `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_db
DB_PORT=3306
PORT=3000
```

Keterangan:
- `DB_HOST`: alamat server MySQL.
- `DB_USER`: username MySQL.
- `DB_PASSWORD`: password MySQL.
- `DB_NAME`: nama database.
- `DB_PORT`: port MySQL.
- `PORT`: port server Express.js.

Ganti `your_mysql_password` dengan password MySQL yang digunakan di komputer.

Tabel `employees` memiliki kolom:
- `id`: ID karyawan, primary key dan auto increment.
- `name`: nama karyawan.
- `email`: alamat email karyawan.
- `position`: jabatan karyawan.
- `department`: departemen karyawan.
- `salary`: gaji karyawan.

## 4. Daftar Endpoint

Base URL:

`http://localhost:3000`

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/employees` | Mendapatkan seluruh data karyawan |
| GET | `/api/employees/:id` | Mendapatkan data karyawan berdasarkan ID |
| POST | `/api/employees` | Menambahkan data karyawan |
| PUT | `/api/employees/:id` | Memperbarui data karyawan berdasarkan ID |
| DELETE | `/api/employees/:id` | Menghapus data karyawan berdasarkan ID |

### Validasi dan Status Response

- `200 OK`: request berhasil.
- `201 Created`: data karyawan berhasil ditambahkan.
- `400 Bad Request`: input tidak valid.
- `404 Not Found`: data karyawan tidak ditemukan.
- `500 Internal Server Error`: terjadi kesalahan pada server.

## 5. Contoh Request

### A. GET All Employees

Method: `GET`

URL:

`http://localhost:3000/api/employees`

Tidak membutuhkan request body.

### B. GET Employee by ID

Method: `GET`

URL:

`http://localhost:3000/api/employees/1`

Tidak membutuhkan request body.

### C. POST Employee

Method: `POST`

URL:

`http://localhost:3000/api/employees`

Header:

`Content-Type: application/json`

Body:

```json
{
  "name": "Dina Putri",
  "email": "dina@example.com",
  "position": "UI/UX Designer",
  "department": "Product",
  "salary": 7000000
}
```

### D. PUT Employee

Method: `PUT`

URL:

`http://localhost:3000/api/employees/1`

Header:

`Content-Type: application/json`

Body:

```json
{
  "name": "Andi Pratama",
  "email": "andi@example.com",
  "position": "Senior Software Engineer",
  "department": "IT",
  "salary": 11000000
}
```

### E. DELETE Employee

Method: `DELETE`

URL:

`http://localhost:3000/api/employees/1`

Tidak membutuhkan request body.

## 6. Contoh Response

Contoh berikut menggambarkan format response API. Pesan dan struktur JSON dapat berbeda sesuai implementasi kode pada setiap endpoint.

### A. GET All Employees — 200 OK

```json
[
  {
    "id": 1,
    "name": "Andi Pratama",
    "email": "andi@example.com",
    "position": "Senior Software Engineer",
    "department": "IT",
    "salary": "11000000.00"
  }
]
```

### B. GET Employee by ID — 200 OK

```json
{
  "id": 1,
  "name": "Andi Pratama",
  "email": "andi@example.com",
  "position": "Senior Software Engineer",
  "department": "IT",
  "salary": "11000000.00"
}
```

### C. POST Employee — 201 Created

```json
{
  "success": true,
  "message": "Karyawan berhasil ditambahkan",
  "data": {
    "id": 4,
    "name": "Dina Putri",
    "email": "dina@example.com",
    "position": "UI/UX Designer",
    "department": "Product",
    "salary": 7000000
  }
}
```

### D. PUT Employee — 200 OK

```json
{
  "success": true,
  "message": "Data karyawan berhasil diperbarui"
}
```

### E. DELETE Employee — 200 OK

```json
{
  "success": true,
  "message": "Karyawan berhasil dihapus"
}
```

### F. Validasi Input Gagal — 400 Bad Request

Contoh request dengan nama dan email kosong serta salary bukan angka:

```json
{
  "name": "",
  "email": "",
  "position": "Backend Developer",
  "department": "IT",
  "salary": "abc"
}
```

Contoh response:

```json
{
  "success": false,
  "message": "Validasi gagal",
  "errors": {
    "name": "Nama wajib diisi",
    "email": "Email wajib diisi",
    "salary": "Salary harus berupa angka"
  }
}
```

### G. Employee Tidak Ditemukan — 404 Not Found

```json
{
  "success": false,
  "message": "Karyawan tidak ditemukan"
}
```

## Pengujian API

Seluruh endpoint dapat diuji menggunakan Postman. File collection pengujian disediakan dalam `employee-api.postman_collection.json`.

Pastikan MySQL Server dan aplikasi Node.js berjalan sebelum melakukan pengujian.