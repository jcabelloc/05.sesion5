const productos = [];

exports.getCrearProducto = (req, res) => {
    res.render('crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' })
};

exports.postCrearProducto = (req, res) => {
    productos.push({nombre: req.body.nombreproducto});
    res.redirect('/')
};

exports.getProductos = (req, res) => {
    res.render('tienda', {
        prods: productos,
        titulo: "La Tienda", 
        path: "/", 
        hayProductos: productos.length > 0
    });
};