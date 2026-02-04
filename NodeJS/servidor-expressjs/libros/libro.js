
import { BD } from '../BD.js';

export function listarTodo(res) {
    const sqlquery = 'SELECT * FROM libro';
    BD.query(sqlquery, (error, results) => {
        if (error) {
            return res.status(500).json({ mensaje: 'Error al obtener los libros' });
        }
        res.json(results);
    });
}
