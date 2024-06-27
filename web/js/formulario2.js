
// var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
var regexCantidad = /^\d+$/;
var regexPrecio = /^\d+(\.\d{1,2})?$/;
var regexDescripcion = /^.{1,200}$/;


var enviarDatos = 0;

var nombre = document.getElementById("nombre");
var mensajeNombre = document.getElementsByClassName("mensajeNombre")[0];
var circleCrossNombre = document.getElementsByClassName("circleCrossNombre")[0];
var circleCheckNombre = document.getElementsByClassName("circleCheckNombre")[0];

var cantidad = document.getElementById("cantidad");
var mensajeCantidad = document.getElementsByClassName("mensajeCantidad")[0];
var circleCrossCantidad = document.getElementsByClassName("circleCrossCantidad")[0];
var circleCheckCantidad = document.getElementsByClassName("circleCheckCantidad")[0];

var precio = document.getElementById("precio");
var mensajePrecio = document.getElementsByClassName("mensajePrecio")[0];
var circleCrossPrecio = document.getElementsByClassName("circleCrossPrecio")[0];
var circleCheckPrecio = document.getElementsByClassName("circleCheckPrecio")[0];

var descripcion  = document.getElementById("descripcion");
var mensajeDescripcion = document.getElementsByClassName("mensajeDescripcion")[0];
var circleCrossDescripcion = document.getElementsByClassName("circleCrossDescripcion")[0];
var circleCheckDescripcion = document.getElementsByClassName("circleCheckDescripcion")[0];

nombre.addEventListener("blur", () => {
    if (!regexNombre.test(nombre.value)) {
        enviarDatos++;
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("error");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    } else {
        mensajeNombre.classList.add("ocultar");
        nombre.classList.remove("error");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
    }
});

cantidad.addEventListener("blur", () => {
    if (!regexCantidad.test(cantidad.value)) {
        enviarDatos++;
        mensajeCantidad.classList.remove("ocultar");
        cantidad.classList.add("error");
        cantidad.classList.add("correcto");
        circleCrossCantidad.classList.remove("ocultar");
        circleCheckCantidad.classList.add("ocultar");
    } else {
        mensajeCantidad.classList.add("ocultar");
        cantidad.classList.add("correcto");
        cantidad.classList.remove("error");
        circleCrossCantidad.classList.add("ocultar");
        circleCheckCantidad.classList.remove("ocultar");
    }
});

precio.addEventListener("blur", () => {
    if (!regexPrecio.test(precio.value)) {
        enviarDatos++;
        mensajePrecio.classList.remove("ocultar");
        precio.classList.add("error");
        precio.classList.add("correcto");
        circleCrossPrecio.classList.remove("ocultar");
        circleCheckPrecio.classList.add("ocultar");
    } else {
        mensajePrecio.classList.add("ocultar");
        precio.classList.add("correcto");
        precio.classList.add("error");
        circleCrossPrecio.classList.add("ocultar");
        circleCheckPrecio.classList.remove("ocultar");
    }
});

descripcion.addEventListener("blur", () => {
    if (!regexDescripcion.test(descripcion.value)) {
        enviarDatos++;
        mensajeDescripcion.classList.remove("ocultar");
        descripcion.classList.add("error");
        descripcion.classList.add("correcto");
        circleCrossDescripcion.classList.remove("ocultar");
        circleCheckDescripcion.classList.add("ocultar");
    } else {
        mensajeDescripcion.classList.add("ocultar");
        descripcion.classList.add("correcto");
        descripcion.classList.add("error");
        circleCrossDescripcion.classList.add("ocultar");
        circleCheckDescripcion.classList.remove("ocultar");
    }
});


var formulario=document.getElementById("formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(enviarDatos);
    if(enviarDatos > 0){
        //enviarDatos=0;
    } 
    else{
        formulario.submit();
    }
});


var formulario=document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    var avanzar=0;
    if (!regexNombre.test(nombre.value)) {

        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("error");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }
    else{

        mensajeNombre.classList.add("ocultar");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
        nombre.classList.remove("error");
        avanzar=1;
        
    }
    if(avanzar=1){
        formulario.submit();
    }
})

