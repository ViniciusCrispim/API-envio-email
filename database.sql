CREATE DATABASE envio_email;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome text REQUIRED,
    email text REQUIRED UNIQUE
);