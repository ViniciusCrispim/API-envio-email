const { buscarEmails } = require('../repository/db.email');
const transport = require('../services/email');
const compiladorHtml = require('../utils/compilador');

const envioEmail = async (req, res) => {
  const { texto } = req.body;
  try {
    const listaEmails = await buscarEmails();

    for (const email of listaEmails) {
      const emailCompilado = await compiladorHtml(
        './src/templates/email.html',
        {
          nomeUsuario: email.nome,
          texto,
        }
      );

      transport.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${email.nome} <${email.email}>`,
        subject: 'Newsletter',
        html: emailCompilado,
      });
    }

    return res.status(204).json({
      mensagem: 'E-mail enviado à todos os usuários cadastrados',
    });
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro interno no servidor, por favor repita a operação.',
    });
  }
};

module.exports = envioEmail;
