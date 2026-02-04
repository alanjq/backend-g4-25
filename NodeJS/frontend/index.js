function cargarDatosDesdeAPI(params) {
    fetch("http://localhost:3000")
        .then(response => response.text())
        .then(result => {
            console.log(result);
            document.getElementById("resultado").innerText = result;
        })
        .catch(error => console.log('error', error));

}

function cargarLibrosDesdeAPI(params) {
    fetch("http://localhost:3000/libros")
        .then((r) => r.json())
        .then((datos) => {
            console.log(datos);
            listarLibros(datos)
        })
        .catch((error) => { console.log('error', error); });
}

function listarLibros(listado) {
    let html = ""
    listado.map((libro) => {
        html += `<li data-id="${libro.id}">${libro.nombre} <button type="button" onclick="eliminarLibro(${libro.id})">eliminar</button></li>`;
    })
    document.getElementById("lista-libros").innerHTML = html;
}

function eliminarLibro(id) {
    fetch(`http://localhost:3000/libro/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 410) {
                console.log('Libro eliminado correctamente');
                document.querySelector(`#lista-libros [data-id='${id}']`).hidden = true;
            }
        })
        .catch(error => console.log('error', error));
}
