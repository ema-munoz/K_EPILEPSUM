DROP DATABASE IF EXISTS epilepsum;
create database epilepsum;

use Epilepsum;

create table Usuarios
(
    id int (11) primary key not null,
    nombre varchar (50) not null,
    telefono int (10) not null,
    edad int (2) not null,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

alter table Usuarios MODIFY id int
(11) not null auto_increment, auto_increment = 1;

create table medicos
(
    id int (11) primary key not null,
    nombre varchar (50) not null,
    telefono int (10) not null,
    edad int (2) not null,
    username varchar (50) not null,
    password varchar (50) not null
);

alter table medico MODIFY id int
(11) not null auto_increment, auto_increment = 1;

create table medicaciones
(
    id int (11) primary key not null,
    nombre varchar (50) not null,
    dosis integer (10) not null,
    hora varchar (50) not null,
    fechaInicio date not null,
    fechaFinal date not null,
    registro timestamp not null default current_timestamp
);

alter table medicaciones MODIFY id int
(11) not null auto_increment, auto_increment = 1;

create table ataquesEpilepticos
(
    id int (11) primary key not null,
    dias varchar (50) not null,
    hora int (10) not null,
    duracion int (10) not null,
    registro timestamp not null default current_timestamp
);

alter table ataquesEpilepticos MODIFY id int
(11) not null auto_increment, auto_increment = 1;
