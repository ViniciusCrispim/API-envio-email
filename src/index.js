require('dotenv').config();
const express = require('express');
const rotaCadastro = require('./routes/rota.cadastro');
const rotaEnvio = require('./routes/rota.envio');
const app = express();

app.use(express.json());

app.use(rotaCadastro);
app.use(rotaEnvio);

app.listen(process.env.PORT);
