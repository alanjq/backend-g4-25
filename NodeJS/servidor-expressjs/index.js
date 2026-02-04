const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Permite que nos conectemos desde el frontend
app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Conexión SQL
const BD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'libreria'
});

BD.connect((error) => {
    if (error) {
        console.error('Error de conexión a la base de datos:', error);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
})

app.get("/", (request, response) => {
    response.status(200).json({ mensaje: "¡Hola desde el servidor Express!" });
    // response.send("¡Hola desde el servidor Express!");
})

// Listar libros
app.get("/libros", (req, res) => {
    const sqlquery = 'SELECT * FROM libro';
    BD.query(sqlquery, (error, results) => {
        if (error) {
            return res.status(500).json({ mensaje: 'Error al obtener los libros' });
        }
        res.json(results);
    })
})

// Obtener el libro por ID
app.get("/libro/:id", (req, res) => {
    const sqlquery = 'SELECT id, nombre, id_autor FROM libro WHERE id = ?';

    BD.query(sqlquery, [req.params.id], (error, results) => {
        if (error) {
            return res.status(500).json({ mensaje: 'Error al obtener los libros' });
        }
        if (results.length === 0) {
            return res.status(404).json({ mensaje: 'Libro no encontrado' });
        }

        res.json(results);
    })
})

app.post("/libro", (req, res) => {
    const insert_query = "INSERT INTO libro (nombre, id_autor) VALUES (?, ?);"
    const { nombre, id_autor } = req.body;

    BD.query(insert_query, [nombre, id_autor], (error, results) => {
        if (error) {
            // console.log('INSERT ERROR::', error);
            return res.status(500).json({ mensaje: 'No se pudo crear el libro' });
        }
        let nuevoLibro = {
            id: results.insertId,
            nombre,
            id_autor
        }
        res.status(201).json({ mensaje: 'Libro creado correctamente', nuevoLibro });
    })
})

// Eliminar un libro mediante el ID
app.delete("/libro/:id", (req, res) => {
    const sqlquery = 'DELETE FROM libro WHERE (id = ?)';
    const { id } = req.params

    BD.query(sqlquery, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ mensaje: 'No se pudo eliminar el libro' });
        }
        res.status(410).json({ mensaje: 'Libro eliminado correctamente' });
    })
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})

