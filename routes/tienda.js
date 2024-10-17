const express = require('express');

const productosController = require('../controllers/productos')

const router = express.Router();

router.get('/', productosController.getProductos);

module.exports = router;