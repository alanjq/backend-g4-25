from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Configuración de conexión a MySQL
db_config = {
    'host': 'localhost',
    'user': 'root',        # Cambia por tu usuario
    'password': '',  # Cambia por tu contraseña
    'database': 'testdb'   # Cambia por tu base de datos
}

# Función para obtener conexión
def get_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except Error as e:
        print(f"Error de conexión: {e}")
        return None

# Ruta para obtener todos los registros
@app.route('/users', methods=['GET'])
def get_users():
    conn = get_connection()
    if conn is None:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(rows), 200

# Ruta para obtener un usuario por ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    conn = get_connection()
    if conn is None:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
    row = cursor.fetchone()
    cursor.close()
    conn.close()
    if row:
        return jsonify(row), 200
    return jsonify({'message': 'Usuario no encontrado'}), 404

# Ruta para crear un usuario
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or 'name' not in data or 'email' not in data:
        return jsonify({'error': 'Datos inválidos'}), 400

    conn = get_connection()
    if conn is None:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", 
                       (data['name'], data['email']))
        conn.commit()
        new_id = cursor.lastrowid
        return jsonify({'message': 'Usuario creado', 'id': new_id}), 201
    except Error as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

# Ruta para actualizar un usuario
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    if not data or 'name' not in data or 'email' not in data:
        return jsonify({'error': 'Datos inválidos'}), 400

    conn = get_connection()
    if conn is None:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET name=%s, email=%s WHERE id=%s", 
                   (data['name'], data['email'], user_id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Usuario actualizado'}), 200

# Ruta para eliminar un usuario
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    conn = get_connection()
    if conn is None:
        return jsonify({'error': 'No se pudo conectar a la base de datos'}), 500
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users WHERE id=%s", (user_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Usuario eliminado'}), 200

if __name__ == '__main__':
    app.run(debug=True)

