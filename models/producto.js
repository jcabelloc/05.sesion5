const productos = [];

module.exports = class Producto {
    constructor(nom) {
        this.nombre = nom;
    }

    save() {
        productos.push(this);
    }

    static fetchAll() {
        return productos;
    }

}