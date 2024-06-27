const ConectarBD = require("./conectarBD");

class ProductoBD extends ConectarBD {
    constructor() {
        super();
    }

    async nuevoProducto(producto) {
        const sql = "INSERT INTO producto values(null,'"+producto.nombre+"','"+producto.cantidad+"','"+producto.precio+"','"+producto.descripcion+"');";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            console.log("Crea un nuevo producto");
            await this.cerrarConexion();
        } catch (error) {
            console.error("ERROR AL AGREGAR PRODUCTO: " + error);
            console.error(sql);
        }
    }

    async mostrarProductos() {
        const sql = "SELECT * FROM producto;";
        try {
            await this.conectarMySql();
            const [productosMySql] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            return (productosMySql);
        } catch (error) {
            console.error("Error al obtener los datos de los productos: " + error);
            console.error(sql);
        }
    }

    async productoId(id) {
        const sql = "SELECT * FROM producto WHERE idproducto="+id+";"
        try {
            await this.conectarMySql();
            const [[producto]] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Consulta correcta por id");
            return producto;
        } catch (error) {
            console.error("Error al consultar por id: " + error);
            console.error(sql);
        }
    }

    async editarProducto(producto) {
        const sql = "UPDATE producto SET nombre='"+producto.nombre+"', cantidad='"+producto.cantidad+"', precio='"+producto.precio+"',descripcion='"+producto.descripcion+"'WHERE idproducto='"+producto.idproducto+"';";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Actualización correcta de producto");
        } catch (error) {
            console.error("Error al editar producto: " + error);
            console.error(sql);
        }
    }

    async borrarProducto(idproducto) {
        const sql = "DELETE FROM producto WHERE idproducto =" +idproducto;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto borrado");
        } catch (error) {
            console.error("Error al borrar el producto: " + error);
            console.error(sql);
        }
    }
}

module.exports = ProductoBD;