<?php
    @$libro = $_REQUEST["nombreLibro"];
    @$paginas = $_REQUEST["paginas"];

    $esNuevo = !isset($libro) && !isset($paginas);

    if($esNuevo){
        echo "<h1>Agregar libro</h1>";
    }else{
        echo "<h1>Modificar libro</h1>";
    }
?>

<form name="crearLibro" method="POST" action="index.php">
    <div>
        <label for="nombreLibro">Nombre del libro:
            <input type="text" name="nombreLibro" placeholder="Nombre del libro" value="<?=$libro?>" />
        </label>
    </div>
        <div>
        <label for="paginasLibro">Páginas:
            <input type="text" name="paginas" placeholder="Número de páginas" value="<?=$paginas?>" />
        </label>
    </div>

    <?php
        if($esNuevo){
            // Si no hay datos mostramos el botón de crear
            echo '<div>
                <button type="submit" onclick="guardar()">Agregar</button>
            </div>';
        }else{
            // Si estamos recibiendo datos, mostramos el botón de guardar
            echo '<div>
                <button type="button" onclick="actualizar()">Guardar</button>
            </div>';
        }
    ?>

</form>

<script>

    <?php
        if($esNuevo){
            echo 'function guardar(){
        console.log("Libro agregado correctamente");
        e.preventDefault();
    }';
        }else{
            echo 'function actualizar(){
        document.querySelector(\'form[name="crearLibro"]\').submit();
        console.log("Libro modificado correctamente");

        let nombrelibro = document.querySelector("[name=\'nombreLibro\']")
        let paginas = document.querySelector("[name=\'paginas\']")

       let newData = {
            nombreLibro: nombrelibro.value,
            paginas: paginas.value
       }

       console.log("Datos actualizados: " + json_encode(newData));
       e.preventDefault();
       return false;
    }';
        }
    ?>
    

   
</script>
