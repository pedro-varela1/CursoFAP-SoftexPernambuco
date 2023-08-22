# Atividade 10
- Funções

## Instrução
Crie um programa que contenha os seguintes tipos de funções:
1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

## Resposta
O código em Javascript está exposto abaixo.

```js
function saudacao() {
  console.log("Bem-vindo à calculadora!");
}

function somar(a, b) {
  return a + b;
}

const multiplicar = (a, b) => a * b;

saudacao();

const num1 = 7;
const num2 = 8;

const resultadoSoma = somar(num1, num2);
console.log(`A soma de ${num1} e ${num2} é: ${resultadoSoma}`);

const resultadoMultiplicacao = multiplicar(num1, num2);
console.log(`O produto de ${num1} e ${num2} é: ${resultadoMultiplicacao}`);
```

Como função tradicional, sem nenhum parâmetro, temos _saudacao_, que mostra ao usuário uma mensagem de início da calculadora.

Como função tradicional com parâmetros e retorno, temos _somar_, que irá somar os parâmetros atribuídos e retornar essa soma.

E, por fim, como _arrow function_, temos _multiplicar_, que recebe os argumentos _a_ e _b_ e retorna sua multiplicação.

Conforme vemos abaixo, essas funções são integradas em um contexto de calculadora, de forma lógica, como solicitado pelo problema.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/66c9540c-9250-40ee-a2f5-18d7e1ef29fa)
