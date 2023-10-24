const {
  cadastrarEmail,
  verificarEmailCadastrado,
} = require('../repository/db.email');

const cadastroEmail = async (req, res) => {
  const { nome, email } = req.body;
  try {
    if (await verificarEmailCadastrado(email)) {
      return res
        .status(400)
        .json({ mensagem: 'Email já cadastrado no sistema' });
    }

    const emailCadastrado = await cadastrarEmail(nome, email);

    return res.status(201).json(emailCadastrado[0]);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro interno no servidor, por favor repita a operação.',
    });
  }
};

module.exports = cadastroEmail;
