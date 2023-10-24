const { Router } = require('express');
const cadastroEmail = require('../controllers/cadastro');
const validarCorpoRequisicao = require('../middlewares/validacao');
const esquemaCadastro = require('../schemas/cadastro');
const rotaCadastro = Router();

rotaCadastro
  .route('/cadastro')
  .post(validarCorpoRequisicao(esquemaCadastro), cadastroEmail);

module.exports = rotaCadastro;
