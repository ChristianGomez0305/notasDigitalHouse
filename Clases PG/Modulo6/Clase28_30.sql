SELECT * FROM albumes WHERE id_artista = 1;

CREATE TABLE tipo_cliente (
	id_tipo_cliente int(6) primary key not null,
    titulo varchar(20) not null
);

ALTER TABLE tipo_cliente ADD porcentaje_descuento TINYINT UNSIGNED;

DROP TABLE tipo_cliente;

SELECT * FROM tipo_cliente;

INSERT INTO tipo_cliente VALUES (2, 'Titulo 2', 10);

INSERT INTO tipo_cliente (id_tipo_cliente, titulo) VALUES (1, 'Titulo 1');

UPDATE tipo_cliente SET porcentaje_descuento = 20 WHERE id_tipo_cliente = 1;

UPDATE tipo_cliente SET titulo = 'Titulo 2 editado', porcentaje_descuento = 20 WHERE id_tipo_cliente = 2;

DELETE FROM tipo_cliente WHERE id_tipo_cliente = 2;

INSERT INTO generos VALUES (26, 'Cumbia');

SELECT * FROM clientes;

SELECT primer_nombre FROM clientes WHERE pais = 'USA';

SELECT * FROM canciones WHERE milisegundos BETWEEN 200000 AND 300000;

SELECT * FROM clientes WHERE pais = 'Spain' or pais = 'Argentina';

SELECT primer_nombre FROM clientes ORDER BY pais DESC, ciudad;

SELECT * FROM canciones WHERE compositor LIKE "A%";

SELECT * FROM generos WHERE nombre LIKE "%ro%";

SELECT * FROM canciones WHERE id BETWEEN 10 AND 20;

SELECT * FROM canciones ORDER BY milisegundos DESC LIMIT 3;

SELECT * FROM canciones ORDER BY nombre LIMIT 5 OFFSET 10;

SELECT nombre AS nombres_de_medios FROM tipos_de_medio;

SELECT CONCAT ('La cancion ', nombre, ' fue compuesta por ', compositor) FROM canciones;

SELECT EXTRACT(MONTH FROM fecha_factura) FROM facturas WHERE id_cliente = 2 ORDER BY fecha_factura DESC;

SELECT canciones.nombre, generos.nombre FROM canciones
INNER JOIN generos ON canciones.id_genero = generos.id
WHERE generos.nombre = 'Rock';

SELECT * FROM albumes 
INNER JOIN artistas ON albumes.id_artista = artistas.id
WHERE artistas.nombre = 'Deep Purple';

SELECT * FROM canciones
INNER JOIN tipos_de_medio ON canciones.id_tipo_de_medio = tipos_de_medio.id
WHERE tipos_de_medio.nombre = "MPEG audio file";

SELECT DISTINCT titulo FROM empleados;

SELECT generos.nombre, COUNT(*) 
FROM canciones
INNER JOIN generos ON canciones.id_genero = generos.id
GROUP BY id_genero;

SELECT COUNT(*) FROM clientes 
WHERE pais = 'Brazil';

SELECT SUM(total) FROM facturas;

SELECT MIN(bytes) FROM canciones;

SELECT pais_de_facturacion, SUM(total) FROM facturas 
GROUP BY pais_de_facturacion 
HAVING SUM(total) > 100;

SELECT ciudad, COUNT(id) FROM clientes
GROUP BY ciudad
HAVING COUNT(id) >= 2;

SELECT generos.nombre, COUNT(id_genero) FROM canciones
INNER JOIN generos ON canciones.id_genero = generos.id
GROUP BY canciones.id_genero;

SELECT * FROM canciones;

SELECT albumes.titulo, COUNT(id_album), AVG(milisegundos) FROM canciones
INNER JOIN albumes ON canciones.id_album = albumes.id
GROUP BY id_album;

SELECT MAX(total) FROM facturas
WHERE id_cliente = 48;