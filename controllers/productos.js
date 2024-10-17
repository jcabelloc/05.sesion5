const Producto = require('../models/producto');

exports.getCrearProducto = (req, res) => {
    res.render('crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' })
};

exports.postCrearProducto = (req, res) => {
    const producto = new Producto(req.body.nombreproducto);

    producto.save();

    res.redirect('/')
};

exports.getProductos = (req, res) => {
    let productos = [];
    Producto.fetchAll(productosObtenidos => {
        console.log(productosObtenidos);
        productos = productosObtenidos;

        res.render('tienda', {
            prods: productos,
            titulo: "La Tienda", 
            path: "/"
        });
    })


};