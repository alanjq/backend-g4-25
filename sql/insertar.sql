-- Insertar datos en la tabla libro
INSERT INTO libro (id, nombre)
    VALUES ('2', 'Cien espíritus'),
           (NULL, 'Lucas de bohemia');


-- Insertar omitiendo columnas
INSERT INTO libro (nombre)
    VALUES ('Cien espíritus'),
           ('Lucas de bohemia');

-- Insertar omitiendo columnas
INSERT INTO libro (nombre, autor)
    VALUES ('Cien espíritus', "Fedor Dostoievski"),
           ('Lucas de bohemia', 'Isabel Allende'),
           ('El gato', 'Ramón del Valle'); 