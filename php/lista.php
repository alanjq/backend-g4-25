<h1>Hola desde PHP</h1>

<div id="contenedor">
        
    <?php
        // Simula que lo traemos de la Base de datos
        echo '<p class="parrafo elemento" onclick="saludar(1)">Este es un párrafo de ejemplo.</p>'
        .'<p class="parrafo elemento" onclick="saludar(2)">Este es un párrafo de ejemplo.<a href="1">ir al libro 1</a></p>'
        .'<p class="parrafo elemento" onclick="saludar(3)">Este es un párrafo de ejemplo.<a href="2">ir al libro 2</a></p>'
        .'<p class="parrafo elemento" onclick="saludar(4)">Este es un párrafo de ejemplo.<a href="3">ir al libro 3</a></p>'
        .'<p class="parrafo elemento" onclick="saludar(5)">Este es un párrafo de ejemplo.<a href="4">ir al libro 4</a></p>'
        .'<p class="parrafo elemento" onclick="saludar(6)">Este es un párrafo de ejemplo.<a href="5">ir al libro 5</a></p>';
    ?>
</div>

<script>
    
    // evento de HTML
    function saludar( id){
        alert("Hola: ID: " + id)
    }
</script>