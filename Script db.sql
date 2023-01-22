Drop database if exists minicoreVictor;
CREATE DATABASE minicoreVictor;

USE minicoreVictor;

DROP TABLE IF EXISTS Cliente;
CREATE TABLE Cliente (
	id int NOT NULL AUTO_INCREMENT,
    nombre varchar(100) not null,
    CONSTRAINT pk_Cliente PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Contrato;
CREATE TABLE Contrato (
	id int NOT NULL AUTO_INCREMENT,
    nombre varchar(100) not null,
    monto float default 0.0,
    fecha date,
    clienteID int not null,
    CONSTRAINT pk_Contrato PRIMARY KEY (id),
    CONSTRAINT fk_cliente FOREIGN KEY (clienteID) REFERENCES Cliente(id)
);



insert into cliente(nombre) values('UDLA');  
insert into cliente(nombre) values('Cigarra');  
insert into cliente(nombre) values('Supermaxi');  
insert into cliente(nombre) values('Jugueton');  

insert into contrato(nombre,monto,fecha,clienteID) values('Contrato 1',10000.20,'2017-06-15',1);
insert into contrato(nombre,monto,fecha,clienteID) values('Contrato 2',5000,'2018-05-15',1);
insert into contrato(nombre,monto,fecha,clienteID) values('Contrato 3',1000,'2020-06-15',1);
insert into contrato(nombre,monto,fecha,clienteID) values('Contrato 1',250.25,'2010-01-01',2);
insert into contrato(nombre,monto,fecha,clienteID) values('Contrato 2',333032.2,'2013-01-15',2);
insert into contrato(nombre,monto,fecha,clienteID) values('Contrato 1',100.12,'2020-06-15',3);