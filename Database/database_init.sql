/*DROP DATABASE IF EXISTS `database_dinos`;

CREATE DATABASE IF NOT EXISTS `database_dinos` CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `database_dinos`;

DROP TABLE IF EXISTS `c_domesticado`;

CREATE TABLE `c_domesticado`
(
  `id_domesticacion` INT NOT NULL auto_increment,
  `tipo_domesticacion` boolean NOT NULL,
  PRIMARY KEY (`id_domesticacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

DROP TABLE IF EXISTS `c_grupo`;

CREATE TABLE `c_grupo`
(
  `id_grupo` INT NOT NULL auto_increment,
  `tipo_grupo` varchar(30) NOT NULL,
  PRIMARY KEY (`id_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

DROP TABLE IF EXISTS `c_reproduccion`;

CREATE TABLE `c_reproduccion`
(
  `id_reproduccion` INT NOT NULL auto_increment,
  `tipo_reproduccion` varchar(20) NOT NULL,
  PRIMARY KEY (`id_reproduccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `dinosaurio`
(
  `id_dino` INT NOT NULL auto_increment,
  `nombre` varchar(50) NOT NULL,
  `id_domesticacion` INT NOT NULL,
  `id_reproduccion` INT NOT NULL,
  `id_grupo` INT NOT NULL,
  PRIMARY KEY (`id_dino`),
  FOREIGN KEY (`id_domesticacion`) REFERENCES c_domesticado(`id_domesticacion`),
  FOREIGN KEY (`id_reproduccion`) REFERENCES c_reproduccion(`id_reproduccion`),
  FOREIGN KEY (`id_grupo`) REFERENCES c_grupo(`id_grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO database_dinos.c_domesticado (database_dinos.c_domesticado.tipo_domesticacion) values (true),(false);

insert into database_dinos.c_grupo (database_dinos.c_grupo.tipo_grupo) values ('Anfibios'), ('Aves'), ('Dinosaurios'), ('Peces'),
('Invertebrados'), ('Mamiferos'), ('Reptiles'), ('Sinapsidos');

insert into database_dinos.c_reproduccion (database_dinos.c_reproduccion.tipo_reproduccion) values ('Por huevo'), ('Por gestación');

*/
