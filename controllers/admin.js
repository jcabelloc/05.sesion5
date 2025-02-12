const Producto = require('../models/producto');

exports.getCrearProducto = (req, res) => {
    res.render('admin/crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' })
};

exports.postCrearProducto = (req, res) => {

    const nombre = req.body.nombre;
    const urlImagen = req.body.urlImagen;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;

    const producto = new Producto(nombre, urlImagen, descripcion, precio);

    producto.save();

    res.redirect('/')
};


exports.getProductos = (req, res) => {
    let productos = [];
    Producto.fetchAll(productosObtenidos => {
        productos = productosObtenidos;

        res.render('admin/productos', {
            prods: productos,
            titulo: "Administracion de Productos", 
            path: "/admin/productos"
        });
    })


};