# API de envio de E-mails

API de cadastro e envio de e-mails

## Documentação da API

#### Cadastra um e-mail

```http
  POST /cadastro
```

| Parâmetros | Tipo     | Descrição       |
| :--------- | :------- | :-------------- |
| `nome`     | `string` | **Obrigatório** |
| `email`    | `string` | **Obrigatório** |

### Exemplo de requisição /cadastro

{  
 "nome" : "Usuario",  
 "email" : "usuario@email.com"  
}

#### Validações de campos (nome) e (email) utilizando o Joi

---

#### Envia um e-mail

```http
  POST /enviar
```

| Parâmetro | Tipo     | Descrição                    |
| :-------- | :------- | :--------------------------- |
| `texto`   | `string` | **Texto conteúdo do e-mail** |

## Exemplo requisição /enviar

{  
 "texto" : "Inserir um texto"  
}

#### Envio de e-mail utilizando o `nodemailer`.

#### Uso do `handlebars` para compilar o arquivo HTML com o `nome` do usuário cadastrado e o `texto` inserido no e-mail.
