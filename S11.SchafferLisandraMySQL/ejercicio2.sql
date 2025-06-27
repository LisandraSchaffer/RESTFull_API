
CREATE DATABASE IF NOT EXISTS ejercicio2;
USE ejercicio2;

CREATE TABLE PAIS (
    pais_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_pais VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE PROVINCIA (
    provincia_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_provincia VARCHAR(100) NOT NULL,
    pais_id INT NOT NULL,
    FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD (
    codigo_localidad INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(20),
    provincia_id INT NOT NULL,
    FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO (
    empleado_id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    fecha_alta DATE,
    codigo_localidad INT NOT NULL,
    FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD(codigo_localidad)
);
