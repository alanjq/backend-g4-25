-- Base de datos Libro versión 1.0

--
-- Estructura de tabla para la tabla `libro`
--

CREATE DATABASE libreria;

USE libreria;

CREATE TABLE libro (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(100) NOT NULL UNIQUE
);
--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO libro (nombre) VALUES
('1984'),
('Cien espíritus'),
('Drácula'),
('La comedia humana'),
('Lucas de bohemia');

-- Agregar la columna autor a la tabla libro
ALTER TABLE libro
ADD COLUMN autor VARCHAR(100);
