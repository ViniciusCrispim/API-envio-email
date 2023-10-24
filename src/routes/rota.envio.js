const { Router } = require('express');
const envioEmail = require('../controllers/envio');
const rotaEnvio = Router();

rotaEnvio.post('/enviar', envioEmail);

module.exports = rotaEnvio;
