CREATE DATABASE market_cubos;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR (150) NOT NULL,
  storename VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  password VARCHAR (50) NOT NULL,
  UNIQUE (username, storename)
);

CREATE TABLE public.produtos (
	id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	usuario_id int NOT NULL,
	"name" varchar NOT NULL,
	stock smallint NOT NULL,
	category jsonb NULL,
	price smallint NOT NULL,
	description text NULL,
	image varchar NULL,
	CONSTRAINT produtos_pk PRIMARY KEY (id),
	CONSTRAINT produtos_fk FOREIGN KEY (usuario_id) REFERENCES public.produtos(id) ON DELETE CASCADE ON UPDATE CASCADE
);
