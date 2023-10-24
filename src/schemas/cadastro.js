const Joi = require('joi');

const esquemaCadastro = Joi.object({
  nome: Joi.string().required().messages({
    'any.required': 'O campo (nome) é obrigatório',
    'string.empty': 'O campo (nome) deve ser preenchido',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'O campo (email) é obrigatório',
    'string.empty': 'O campo (email) deve ser preenchido',
    'string.email': 'Insira um e-mail válido',
  }),
});

module.exports = esquemaCadastro;
