const express = require("express");
const ruta2 = express.Router();
const ProductoClase = require("../clases/ProductoClase");
const ProductoBD = require("../bd/ProductosBD");

// Ruta para mostrar todos los productos
ruta2.get("/productos", async (req, res) => {

    const productobd = new ProductoBD();
    const productosMySql = await productobd.mostrarProductos();
    var productosCorrectos = [];
    productosMySql.forEach(producto => {
            var producto1 = new ProductoClase(producto);

        if (producto1.nombre != undefined && producto1.cantidad != undefined && producto1.precio != undefined && producto1.descripcion != undefined){
                productosCorrectos.push(producto);
         }
    });

    res.render("mostrarProductos", { productosCorrectos });
});

// Ruta para agregar un nuevo producto
ruta2.post("/agregarProducto", (req, res) => {
    var producto1 = new ProductoClase(req.body);
    console.log(producto1.mostrarDatos);
    if (producto1.nombre != undefined && producto1.cantidad != undefined && producto1.precio != undefined && producto1.descripcion != undefined) {
        const productobd = new ProductoBD();
        productobd.nuevoProducto(producto1.mostrarDatos);
        res.render("inicio2", producto1.mostrarDatos);
    } else {
        res.render("error");
    }
});

// Ruta para mostrar el formulario de agregar producto
ruta2.get("/agregarProducto", (req, res) => {
    res.render("formularioproductos");
});

// Ruta para mostrar el formulario de editar producto
ruta2.get("/editarProducto/:idProducto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        const producto = await productobd.productoId(req.params.idProducto);
        res.render("editarProducto", producto);
    } catch (error) {
        console.error("Error al obtener el producto para editar: " + error);
        res.render("error");
    }
});

// Ruta para procesar la edición de producto
ruta2.post("/editarProducto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.editarProducto(req.body);
        console.log("Producto editado correctamente");
        res.redirect("/productos");
    } catch (error) {
        console.error("Error al editar el producto: " + error);
        res.render("error");
    }
});

// Ruta para borrar un producto
ruta2.get("/borrarProducto/:id", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.borrarProducto(req.params.id);
        res.redirect("/productos");
    } catch (error) {
        console.error("Error al borrar el producto: " + error);
        res.render("error");
    }
});

module.exports = ruta2;

