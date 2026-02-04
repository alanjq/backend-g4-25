CREATE TABLE `libreria`.`autor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `libreria`.`autor` (`nombre`, `apellido`) VALUES ('Nicolai', 'Gogol');
INSERT INTO `libreria`.`autor` (`nombre`, `apellido`) VALUES ('Isabel', 'Allende');

