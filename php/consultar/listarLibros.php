<?php
    include_once("conexionbd.php");
    
    // Obtener los registros de libros desde la base de datos
    $sql = "SELECT * FROM libro";
    $resultado = mysqli_query($conexion, $sql);
    
    // Si no hay elementos, indicamos que no hay
    if(mysqli_num_rows($resultado) == 0){
        echo "No hay libros registrados.";
        return; 
    }
    
    // Cargar información
    while($fila = mysqli_fetch_assoc($resultado)) {
        echo printLibro($fila['id'], $fila['nombre']);
    }
   
    function printLibro($id, $nombre){
        return '<p class="libro" id="libro-'. $id .'">
                <b ondblclick="cambiarNombre(1)">'. $nombre .'</b> <br>
                <button onclick="eliminar('. $id .')">Eliminar</button>
            </p>';
    }
?>

<script>
    function eliminar(id){
        let isOk = confirm("¿Está seguro de eliminar este libro?");
        if(isOk){
            // Llamar a la API para eliminar
            fetch('eliminarLibro.php?id=' + id)
            .then(response=>response.json())
            .finally(()=>{
                location.href = "http://localhost/backend/consultar/crearLibro.php"
            })
        }
    }
</script>