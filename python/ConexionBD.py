import mysql.connector
from mysql.connector import Error

def conectar_mysql(host, user, password, dbname):
    try:
        conexion = mysql.connector.connect(host=host,user=user,password=password,database=dbname)

        if conexion.is_connected():
            print("Conexión exitosa")

            return conexion

    except Error as e:
        print("Error en la conexión.", e)
        return None

def cerrar_conexion(conexion):
    if conexion.is_connected():
        conexion.close()
        print("Conexión cerrada")

# Datos de la conexión
host = 'localhost'
user = 'root'
password = ''
dbname = 'testdb'

# Hacer la prueba de conexión
conexion = conectar_mysql(host, user, password, dbname)

# Realizar una consulta
if conexion:
    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM libro")

    resultados = cursor.fetchall()

    for fila in resultados:
        print(fila)

    cursor.close()
    cerrar_conexion(conexion)
