<?php
    include "conexionbd.php";

    @$id = $_REQUEST["id"];

    if(isset($id)) {
        $sql = "DELETE FROM libro WHERE id = ". $id;
        mysqli_query($conexion, $sql);
        echo "<div>Registro eliminado correctamente.</div>";
    }
?>
