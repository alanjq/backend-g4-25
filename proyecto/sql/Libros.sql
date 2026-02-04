-- Crear base de datos
create database Libros

-- Usar la base de datos
use Libros

-- Crear tabla Autor
CREATE TABLE `autor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Crear tabla libro
CREATE TABLE `libro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `paginas` smallint DEFAULT NULL,
  `fecha_publicacion` smallint DEFAULT NULL,
  `editorial` varchar(50) DEFAULT NULL,
  `idautor` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idautor_idx` (`idautor`),
  CONSTRAINT `fk_idautor` FOREIGN KEY (`idautor`) REFERENCES `autor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

