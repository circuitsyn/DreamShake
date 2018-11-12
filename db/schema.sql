### Schema

CREATE DATABASE shake_db;
USE shake_db;

CREATE TABLE shakes
(
	id int NOT NULL AUTO_INCREMENT,
	Shake varchar(255) NOT NULL,
	Drank BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
