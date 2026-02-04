ALTER TABLE `libreria`.`libro` 
ADD COLUMN `autor_id` INT(11) NOT NULL AFTER `autor`,
ADD INDEX `fk_libro_autor_idx` (`autor_id` ASC) VISIBLE;

ALTER TABLE `libreria`.`libro` 
ADD CONSTRAINT `fk_libro_autor`
  FOREIGN KEY (`autor_id`)
  REFERENCES `libreria`.`autor` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION
