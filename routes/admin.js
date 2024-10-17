const express = require('express');

const productosController = require('../controllers/productos')

const router = express.Router();


// /admin/crear-producto
router.get('/crear-producto', productosController.getCrearProducto);

// /admin/productos
router.post('/crear-producto', productosController.postCrearProducto);

module.exports = router;
