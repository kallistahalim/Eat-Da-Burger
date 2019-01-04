CREATE DATABASE burger_db;
USE DATABASE burger_db;

CREATE TABLE burgers (
    ID INT AUTO_INCREMENT NOT NULL,
    Burger_Name VARCHAR(255) NOT NULL,
    Devoured BOOLEAN NOT NULL DEFAULT false,
    primary key (ID)
);

