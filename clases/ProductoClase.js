class Producto {
    constructor(producto1) {
        this.id = producto1.idproducto;
        this.nombre = producto1.nombre;
        this.cantidad = producto1.cantidad;
        this.precio = producto1.precio;
        this.descripcion = producto1.descripcion;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        // const regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        const regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
        if (regexNombre.test(nombre)) {
            this._nombre = nombre;
        }
    }


    set cantidad(cantidad) {
        var regexCantidad = /^\d+$/;
        if (regexCantidad.test(cantidad)) {
            this._cantidad = cantidad;
        }
    }

   
    set precio(precio) {
    var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if (regexPrecio.test(precio)) {
            this._precio = precio;
        }
    }

    set descripcion(descripcion){
    var regexDescripcion = /^.{1,200}$/;
        if (regexDescripcion.test(descripcion))
            this._descripcion = descripcion;
    }

    get nombre() {
        return this._nombre;
    }

    get cantidad() {
        return this._cantidad
    }
    
    get precio() {
        return this._precio;
    }

    get id() {
        return this._id
    }

    get descripcion(){
        return this._descripcion
    }
    
    get mostrarDatos() {
        return {
            id: this.id,
            nombre: this.nombre,
            cantidad: this.cantidad,
            precio: this.precio,
            descripcion: this.descripcion
        }
    }
}

module.exports = Producto;
