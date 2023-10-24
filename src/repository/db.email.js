const knex = require('../services/conexao');

const verificarEmailCadastrado = async (email) =>
  await knex('usuarios').where({ email });

const cadastrarEmail = async (nome, email) =>
  await knex('usuarios').insert({ nome, email }).returning('*');

const buscarEmails = async () => await knex('usuarios');

module.exports = { cadastrarEmail, verificarEmailCadastrado, buscarEmails };
