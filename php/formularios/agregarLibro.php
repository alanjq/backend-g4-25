<?php
    @$libro = $_POST["nombreLibro"];
    @$paginas = $_POST["paginas"];
    
    echo "Libro: " . $libro;
    echo '<br>';
    echo '<br>';
    echo "Número de páginas: " . $paginas;
    
    echo "<h1>Ver libro</h1>";
    
    include("libro.php");
