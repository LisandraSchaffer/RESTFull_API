CREATE DATABASE CLINICA;
USE CLINICA;

CREATE TABLE MEDICO (
    matricula INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    especialidad VARCHAR(50),
    observaciones VARCHAR(100)
);

CREATE TABLE PACIENTE (
    nss INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    domicilio VARCHAR(100),
    codigo_postal INT,
    telefono VARCHAR(20),
    nro_historial_clinico INT UNIQUE,
    observaciones VARCHAR(100)
);

CREATE TABLE INGRESO (
    id_ingreso INT PRIMARY KEY,
    fecha_ingreso DATE,
    nro_habitacion INT,
    nro_cama INT,
    observaciones VARCHAR(100),
    nro_historia_paciente INT,
    matricula_medico INT,
    FOREIGN KEY (nro_historia_paciente) REFERENCES PACIENTE(nro_historial_clinico),
    FOREIGN KEY (matricula_medico) REFERENCES MEDICO(matricula)
);

