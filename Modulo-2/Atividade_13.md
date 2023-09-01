# Atividade 13
- Conexão com banco de dados

## Instrução
Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro.

## Resposta
O código em Javascript está exposto abaixo.

```js
const mysql = require('mysql2');

// Configurações de conexão:
const dbConfig = {
  host: 'localhost', // Endereço do banco de dados
  user: 'seu_usuario', // Nome de usuário do banco de dados
  password: 'sua_senha', // Senha do banco de dados
  database: 'nome_do_banco' // Nome do banco de dados
};

// Criar conexão:
const connection = mysql.createConnection(dbConfig);

// Estabelecer a conexão:
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
});

// Fechar a conexão com o banco de dados
connection.end();
```

Antes de estabelecer a conexão, é necessário instalar o módulo _mysql2_ com o _npm_ e importá-lo no projeto.

Depois, é necessário configurar essa conexão com o banco de dados no objeto _dbConfig_. 

Feito isso, o método _createConnection_ cria uma conexão com base em _dbConfig_, que é estabelecida com _connection.connect_. 

Por fim, encerramos a conexão com a linha de código _connection.end()_.
