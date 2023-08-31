# Atividade 12
-  _For in_ e _For of_

## Instrução
Vamos criar um array de objetos pessoa com, no mínimo, quatro itens. Cada um deles será composto por quatro propriedades: nome, idade, profissão e cidade.

Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um código que utilize _for in_ e _for of_ para que todos os objetos e propriedades sejam impressos.

## Resposta
O código em Javascript está exposto abaixo.

```js
// Array de objetos pessoa
const pessoas = [
  { nome: 'Pedro', idade: 21, profissao: 'Engenheiro Eletricista', cidade: 'Natal' },
  { nome: 'Artur', idade: 30, profissao: 'Professor', cidade: 'Ceará-Mirim' },
  { nome: 'Douglas', idade: 22, profissao: 'Estudante', cidade: 'Santa Cruz' },
  { nome: 'Ana', idade: 28, profissao: 'Médica', cidade: 'Salvador' }
];

// Usando for in
console.log("Usando for-in:");
for (let index in pessoas) {
  const pessoa = pessoas[index];
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Cidade: ${pessoa.cidade}`);
}

// Usando for of
console.log("\nUsando for-of:");
for (let pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Cidade: ${pessoa.cidade}`);
}
```
Percebeu-se que, utilizando o _for of_, obtemos um código mais simplificado para o nosso objetivo - acessar as informações da lista. Porém, se precisássemos acessar o index diretamento, _for in_ seria mais útil.

Abaixo, vemos a saído no terminal do meu ambiente de desenvolvimento:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/8f0ff40b-7c5e-4604-b45d-f4751bb12d8c)
