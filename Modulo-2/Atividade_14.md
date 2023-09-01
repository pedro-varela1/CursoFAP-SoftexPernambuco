# Atividade 14
- HTTP

## Instrução
﻿Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc).

## Resposta
O código em Javascript está exposto abaixo.

```js
const express = require('express');
const app = express();
const port = 3000; // Escolha a porta que desejar

// Rota GET simples
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Node.js está rodando na porta ${port}`);
});
```

Com isso, acessando _http://localhost:3000_ no navegador ou através do Postman, é possível visualizar a mensagem "Olá, mundo!".

Este é apenas um exemplo simples de uma rota GET. É possível criar rotas adicionais e implementar diferentes tipos de solicitações (GET, PUT, POST, DELETE...) conforme necessário para o aplicativo. 
