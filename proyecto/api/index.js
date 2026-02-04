const express = require('express'); // El servidor web
const cors = require('cors'); // Para permitir conectarse desde el frontend

// Importamos la configuración y la conexión de la base de datos
// const { connection } = require('./db/connection');
const routes  = require('./routes/libros');

const app = express();
const PORT = process.env.PORT || 3000; // por ahora es 3000 pero se puede modificar


// Crear las rutas del servidor
app.use(cors());
app.use(express.json()); // para que entienda JSON en las peticiones

// Usar las rutas definidas en routes/index.js
app.use(routes.router);
// app.use('/autores', routes.autores);
// Aquí se pueden agregar más rutas cuando se creen

app.listen(PORT, () => {
    console.log(`El servidor REST está escuchando en: http://localhost:${PORT}`);
})
