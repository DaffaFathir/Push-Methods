const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM employees'
        );

        res.json({
            success: true,
            message: 'Data karyawan berhasil diambil',
            data: rows
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal mengambil data karyawan',
            error: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM employees WHERE id = ?',
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Karyawan tidak ditemukan'
            });
        }

        res.json({
            success: true,
            message: 'Data karyawan berhasil diambil',
            data: rows[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal mengambil data karyawan',
            error: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { id, name, email, position, department, salary } = req.body;

        // Validasi input
        const errors = {};
        if (id === undefined || id === null || id.toString().trim() === '') errors.id = 'ID karyawan wajib diisi';
        if (!name || name.toString().trim() === '') errors.name = 'Nama karyawan wajib diisi';
        if (!email || email.toString().trim() === '') errors.email = 'Email wajib diisi';
        if (!position || position.toString().trim() === '') errors.position = 'Posisi wajib diisi';
        if (!department || department.toString().trim() === '') errors.department = 'Departemen wajib diisi';
        if (salary === undefined || salary === null || salary === '') {
            errors.salary = 'Gaji wajib diisi dan harus berupa angka';
        } else if (isNaN(Number(salary))) {
            errors.salary = 'Gaji wajib diisi dan harus berupa angka';
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Validasi gagal',
                errors
            });
        }

        const [result] = await db.query(
            'INSERT INTO employees (id, name, email, position, department, salary) VALUES (?, ?, ?, ?, ?, ?)',
            [id, name, email, position, department, salary]
        );

        res.status(201).json({
            success: true,
            message: 'Karyawan berhasil ditambahkan',
            data: {
                id,
                name,
                email,
                position,
                department,
                salary
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal menambahkan karyawan',
            error: error.message
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id, name, email, position, department, salary } = req.body;

        // Validasi input
        const errors = {};
        if (id === undefined || id === null || id.toString().trim() === '') errors.id = 'ID karyawan wajib diisi';
        if (!name || name.toString().trim() === '') errors.name = 'Nama karyawan wajib diisi';
        if (!email || email.toString().trim() === '') errors.email = 'Email wajib diisi';
        if (!position || position.toString().trim() === '') errors.position = 'Posisi wajib diisi';
        if (!department || department.toString().trim() === '') errors.department = 'Departemen wajib diisi';
        if (salary === undefined || salary === null || salary === '') {
            errors.salary = 'Gaji wajib diisi dan harus berupa angka';
        } else if (isNaN(Number(salary))) {
            errors.salary = 'Gaji wajib diisi dan harus berupa angka';
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Validasi gagal',
                errors
            });
        }

        const [check] = await db.query(
            'SELECT id FROM employees WHERE id = ?',
            [req.params.id]
        );

        if (check.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Karyawan tidak ditemukan'
            });
        }

        await db.query(
            'UPDATE employees SET name = ?, email = ?, position = ?, department = ?, salary = ? WHERE id = ?',
            [name, email, position, department, salary, req.params.id]
        );

        res.json({
            success: true,
            message: 'Data karyawan berhasil diperbarui',
            data: {
                id: parseInt(req.params.id),
                name,
                email,
                position,
                department,
                salary
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal memperbarui data karyawan',
            error: error.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const [check] = await db.query(
            'SELECT * FROM employees WHERE id = ?',
            [req.params.id]
        );

        if (check.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Karyawan tidak ditemukan'
            });
        }

        await db.query(
            'DELETE FROM employees WHERE id = ?',
            [req.params.id]
        );

        res.json({
            success: true,
            message: 'Karyawan berhasil dihapus',
            data: check[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Gagal menghapus karyawan',
            error: error.message
        });
    }
});

module.exports = router;