<?php
$host = "localhost"; // o 127.0.0.1
$user = "root";
$password = "";
$database = "libreria";
$conexion = mysqli_connect($host, $user, $password, $database);

if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Si la conexión fue exitosa
// echo "Conexión exitosa a la base de datos.";
?>
