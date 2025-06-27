
CREATE DATABASE IF NOT EXISTS ejercicio1;
USE ejercicio1;

CREATE TABLE ALUMNO (
    cod_matricula INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    fecha_nac DATE NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE CURSO (
    cod_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE PROFESOR (
    profesor_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100),
    email VARCHAR(100) NOT NULL
);

CREATE TABLE ALUMNO_CURSO (
    cod_matricula INT NOT NULL,
    cod_curso INT NOT NULL,
    PRIMARY KEY (cod_matricula, cod_curso),
    FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula),
    FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

CREATE TABLE CURSO_PROFESOR (
    cod_curso INT NOT NULL,
    profesor_id INT NOT NULL,
    PRIMARY KEY (cod_curso, profesor_id),
    FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
    FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id)
);
