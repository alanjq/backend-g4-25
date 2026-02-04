-- Libros con nombre de autor y su ISBN
SELECT 
	L.nombre AS Libro,
	CONCAT("304S0", L.id) AS ISBN,
    A.id AS NoRegAutor,
	CONCAT(A.apellido, ', ' , A.nombre) AS Nombre_Autor
FROM libro AS L
INNER JOIN autor AS A
	ON A.id = L.id_autor

-- Consulta INNER JOIN sencilla
SELECT  * 
FROM libro
INNER JOIN autor
	ON autor.id = libro.id_autor
