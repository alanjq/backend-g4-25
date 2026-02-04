<?php
    @$libro = $_REQUEST["nombreLibro"];
    @$paginas = $_REQUEST["paginas"];
    
    // si se recibe el valor de Libro, se agrega
    if(isset($libro)) {
        // crear libro en la base de datos
        include "conexionbd.php";
        
        $sql = "INSERT INTO libro (id, nombre) VALUES (NULL, '". $libro . "')";
        mysqli_query($conexion, $sql);        
        
        echo "<div>Registro agregado correctamente.</div>";
    }
?>

<h1>Agregar libro</h1>

<form name="crearLibro" method="POST" action="crearLibro.php">
    <div>
        <label for="nombreLibro">Nombre del libro:
            <input type="text" name="nombreLibro" placeholder="Nombre del libro" value="" />
        </label>
    </div>
        <div>
        <label for="paginasLibro">Páginas:
            <input type="text" name="paginas" placeholder="Número de páginas" value="" />
        </label>
    </div>

    <div>
        <button type="submit">Agregar</button>
    </div>
</form>

<h1>Listado</h1>

<?php include "listarLibros.php"; ?>
