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

INSERT INTO MEDICO VALUES (155, 'Alfredo', 'Gutierrez', 'Medicina Familiar', 'No atiende PAMI');
INSERT INTO MEDICO VALUES (221, 'Luisa', 'Foseca', 'Cardiología', NULL);
INSERT INTO MEDICO VALUES (226, 'Frodo', 'Bolson', 'Pediatría', 'Solamente turno tarde');
INSERT INTO MEDICO VALUES (332, 'Jesus Maria', 'Prates', 'Cirugía', NULL);
INSERT INTO MEDICO VALUES (334, 'Gandalf', 'Meriadoc', 'Infectología', NULL);
INSERT INTO MEDICO VALUES (449, 'Ricardo', 'Puchini', 'Medicina Familiar', 'medico clinico general');
INSERT INTO MEDICO VALUES (645, 'Cacho', 'Villa', 'Oftalmología', NULL);
INSERT INTO MEDICO VALUES (733, 'Tatiana', 'Brandigamo', 'Pediatría', NULL);
INSERT INTO MEDICO VALUES (774, 'Alfonso', 'Chamorro', 'Cardiología', NULL);
INSERT INTO MEDICO VALUES (888, 'Pedro Pablo', 'Cichanowski', 'Urología', 'con licencia por covid');

INSERT INTO PACIENTE VALUES (32197, 'Aewin', 'Rohan', 'Valinor 1001', 2366, '3274-232336', 675, NULL);
INSERT INTO PACIENTE VALUES (97164, 'Glorfindel', 'Arda', 'Terminal esquina Avenida', 3360, '3755-447031', 778, 'realizar PCR');
INSERT INTO PACIENTE VALUES (31661, 'Karen Sophia', 'Burgin', 'Primeros Colonos y Junin', 3640, '3745-998877', 1236, NULL);
INSERT INTO PACIENTE VALUES (36485, 'Gimli', 'Moria', 'Juan de Orquideas 335', 3363, '3755-866545', 1488, NULL);
INSERT INTO PACIENTE VALUES (87164, 'Legolas', 'Bosque Negro', 'Krause y Villavieja', 3514, '3971-544444', 1498, 'historial de cardiopatias');
INSERT INTO PACIENTE VALUES (25465, 'Elrond', 'Rivendell', 'Balneario Campo Grande', 3350, '3764-421479', 1884, NULL);
INSERT INTO PACIENTE VALUES (36984, 'Galadriel', 'Lorien', 'Bareiro 170', 2207, '3943-425561', 3212, NULL);
INSERT INTO PACIENTE VALUES (44946, 'Josefina', 'Pereira Dias', 'Calle primera 201', 3363, '3755-587912', 4112, NULL);
INSERT INTO PACIENTE VALUES (65416, 'Jose', 'Villagran', 'Arrayanes 1205', 3360, '3755-589478', 4551, NULL);

INSERT INTO INGRESO VALUES (1, '2021-11-01', 1, 2, NULL, 1884, 449);
INSERT INTO INGRESO VALUES (2, '2021-11-02', 1, 1, NULL, 1488, 226);
INSERT INTO INGRESO VALUES (3, '2021-11-02', 2, 4, 'Falta completar carnet de vacunacion', 1498, 733);
INSERT INTO INGRESO VALUES (4, '2021-11-03', 1, 2, NULL, 4551, 774);
INSERT INTO INGRESO VALUES (5, '2021-11-05', 4, 7, NULL, 4112, 645);
INSERT INTO INGRESO VALUES (6, '2021-11-15', 5, 9, NULL, 1236, 226);
INSERT INTO INGRESO VALUES (7, '2021-11-17', 5, 10, NULL, 675, 774);
INSERT INTO INGRESO VALUES (8, '2021-12-09', 3, 6, NULL, 778, 888);
INSERT INTO INGRESO VALUES (9, '2021-12-11', 4, 8, 'Solicitar electrocardiograma', 4112, 332);
INSERT INTO INGRESO VALUES (10, '2021-12-11', 2, 3, NULL, 3212, 774);
INSERT INTO INGRESO VALUES (11, '2021-12-18', 2, 4, NULL, 778, 334);
INSERT INTO INGRESO VALUES (12, '2021-12-22', 1, 1, NULL, 1488, 155);
INSERT INTO INGRESO VALUES (13, '2022-01-04', 9, 17, NULL, 1236, 645);
INSERT INTO INGRESO VALUES (14, '2022-01-11', 5, 9, NULL, 675, 226);
INSERT INTO INGRESO VALUES (15, '2022-01-12', 4, 8, NULL, 3212, 155);
INSERT INTO INGRESO VALUES (16, '2022-01-16', 8, 16, NULL, 1236, 226);
INSERT INTO INGRESO VALUES (17, '2022-01-24', 2, 3, NULL, 1488, 888);
INSERT INTO INGRESO VALUES (18, '2022-02-01', 8, 15, NULL, 3212, 334);
INSERT INTO INGRESO VALUES (19, '2022-02-14', 1, 2, NULL, 1884, 449);
INSERT INTO INGRESO VALUES (20, '2022-02-15', 7, 13, NULL, 4112, 888);
INSERT INTO INGRESO VALUES (21, '2022-03-02', 3, 5, NULL, 675, 155);
INSERT INTO INGRESO VALUES (22, '2022-03-07', 8, 12, NULL, 4551, 334);
INSERT INTO INGRESO VALUES (23, '2022-03-13', 3, 6, NULL, 1498, 645);
INSERT INTO INGRESO VALUES (24, '2022-03-16', 9, 18, NULL, 675, 155);
INSERT INTO INGRESO VALUES (25, '2022-03-19', 5, 9, NULL, 4112, 774);
INSERT INTO INGRESO VALUES (26, '2022-03-22', 6, 11, 'Cuenta con servicio integral de rehabilitacion', 1498, 332);
INSERT INTO INGRESO VALUES (27, '2022-03-22', 3, 6, NULL, 1884, 332);
INSERT INTO INGRESO VALUES (28, '2022-03-22', 5, 10, NULL, 778, 449);
INSERT INTO INGRESO VALUES (29, '2022-03-23', 1, 1, NULL, 4112, 155);
INSERT INTO INGRESO VALUES (30, '2022-03-25', 3, 6, NULL, 1236, 226);
INSERT INTO INGRESO VALUES (31, '2022-03-29', 2, 4, NULL, 3212, 645);
INSERT INTO INGRESO VALUES (32, '2022-03-30', 9, 17, NULL, 4112, 155);
INSERT INTO INGRESO VALUES (33, '2022-04-05', 6, 11, 'Internacion por deshidratacion', 1488, 733);
INSERT INTO INGRESO VALUES (34, '2022-04-07', 7, 13, NULL, 4551, 774);

-- a) Actualizar teléfono del último paciente ingresado
UPDATE PACIENTE
SET telefono = '3745-589174'
WHERE nss = 65416;

-- b) Nombres y apellidos de los médicos
SELECT nombre, apellido FROM MEDICO;

-- c) Pacientes con código postal 5000
SELECT nombre, apellido FROM PACIENTE WHERE codigo_postal = 5000;

-- d) Médicos con observaciones
SELECT nombre, especialidad, matricula
FROM MEDICO
WHERE observaciones IS NOT NULL;

-- e) Cantidad de pacientes únicos que ingresaron
SELECT COUNT(DISTINCT nro_historia_paciente) AS pacientes_unicos
FROM INGRESO;

-- f) Nombre del paciente y fecha de ingreso
SELECT P.nombre, I.fecha_ingreso
FROM INGRESO I
JOIN PACIENTE P ON I.nro_historia_paciente = P.nro_historial_clinico;

-- g) Nombre del médico y cantidad de ingresos que atendió
SELECT M.nombre, COUNT(I.id_ingreso) AS ingresos
FROM INGRESO I
JOIN MEDICO M ON I.matricula_medico = M.matricula
GROUP BY M.nombre;

-- h) Nombre del paciente y del médico que lo atendió
SELECT P.nombre AS paciente, M.nombre AS medico
FROM INGRESO I
JOIN PACIENTE P ON I.nro_historia_paciente = P.nro_historial_clinico
JOIN MEDICO M ON I.matricula_medico = M.matricula;
