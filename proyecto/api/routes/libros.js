// Cargamos a configuración y archivos necesarios
const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const e = require('express');

// #region Funciones
const consulta = (db, res, consulta) => {
    db.query(consulta, (err, results) => {
        if (err) {
            // console.error('Error al obtener los autores:', err);
            res.status(500).send('Ocurrió un error en la consulta.');
            return;
        }
        res.json(results);
    });
}

const consultaPorId = (db, res, id, consulta) => {
    db.query(consulta, [id], (err, results) => {
        if (err) {
            // console.error('Error al obtener los autores:', err);
            res.status(500).send('Ocurrió un error en la consulta.');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('No se encontró el registro con el ID proporcionado.');
            return;
        }
        res.json(results[0]);
    });
}

const insertar = (db, res, datos, consulta) => {
    let objRespuesta = {}

    db.query(consulta, datos, (err) => {
        if (err) {
            objRespuesta.message = 'Ocurrió un error al insertar el registro.';
            res.status(500).send(objRespuesta);
            return;
        }
        objRespuesta.message = 'Registro insertado';
        objRespuesta.id = res.insertId;

        res.status(201).send(objRespuesta);
    })
};

const actualizar = (db, res, id, datos, consulta) => {
    // Sacamos los campos del body para no tener que escribir datos.body.campo
    db.query(consulta, [...datos, id], (err) => {
        if (err) {
            res.status(500).send('Ocurrió un error al actualizar el registro.');
            return;
        }
        res.status(200).send({ message: 'Registro actualizado' });
    });

}

const eliminar = (db, res, id, consulta) => {
    db.query(consulta, [id], (err) => {
        if (err) {
            res.status(500).send('Ocurrió un error al eliminar el registro.');
            return
        }
        res.status(410).send({ message: 'Registro eliminado' });
    })
}

// #endregion Funciones

router.get('/', async (req, res) => {
    res.send('API');
});

// #region Libros

// Listar todos los libros
router.get('/libros', async (req, res) => {
    return consulta(db, res, 'SELECT * FROM libro');
});

// Libro por ID
router.get('/libros/:id', async (req, res) => {
    consultaPorId(db, res, [req.params.id], 'SELECT * FROM libro WHERE id = ?');
});

// Agregar Libro nuevo
router.post('/libros', async (req, res) => {
    let bodyrequest = [req.body.titulo, req.body.paginas, req.body.fecha_publicacion, req.body.editorial, req.body.idautor];
    let consulta = 'INSERT INTO libro (titulo, paginas, fecha_publicacion, editorial, idautor) VALUES (?, ?, ?, ?, ?)'
    return insertar(db, res, bodyrequest, consulta);
});

// Editar Libro nuevo
router.put('/libros/:id', async (req, res) => {
    // Agregar el PUT como en autor
    res.send('Actualizar libro por ID');
});

// Eliminar Libro por ID
router.delete('/libros/:id', async (req, res) => {
    // Agregar DELETE como en autor
    res.send('Actualizar libro por ID');
});

// #endregion Libros


// #region Autores
router.get('/autores', async (req, res) => {
    consulta(db, res, 'SELECT * FROM autor');
});

router.get('/autores/:id', async (req, res) => {
    consultaPorId(db, res, [req.params.id], 'SELECT * FROM autor WHERE id = ?');
});

router.post('/autores', async (req, res) => {
    let bodyrequest = [req.body.nombre, req.body.apellido];
    let consulta = 'INSERT INTO autor (nombre, apellido) VALUES (?, ?)'
    insertar(db, res, bodyrequest, consulta);
})

router.put('/autores/:id', async (req, res) => {
    let { nombre, apellido } = req.body;
    let consulta = 'UPDATE autor SET nombre = ?, apellido = ? WHERE id = ?'
    actualizar(db, res, req.params.id, [nombre, apellido], consulta);
});

router.delete('/autores/:id', async (req, res) => {
    eliminar(db, res, [req.params.id], 'DELETE FROM autor WHERE id = ?');
});
// #endregion autores



// Enviamos las rutas disponibles
module.exports = { router };
