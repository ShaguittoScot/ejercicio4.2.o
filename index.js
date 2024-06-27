const express = require('express');
const path = require('path');
const usuariosRutas = require('./routes/usuariosRutas');
const productosRutas = require('./routes/productosRutas'); // Importa las rutas de productos

const app = express();

// Middleware para servir archivos estáticos desde la carpeta 'web'
app.use('/', express.static(path.join(__dirname, 'web')));

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Middleware para parsear bodies de formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para las rutas de usuarios
app.use('/', usuariosRutas);

// Middleware para las rutas de productos bajo /productos
app.use('/', productosRutas);

// Configuración del puerto
const port = process.env.PORT || 3000;

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor en http://127.0.0.1:${port}`);
});
