# Atividade 25
- Excessões e Erros

## Instrução
﻿Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção.

## Resposta
O código em Javascript está exposto abaixo.

```js
// Solicita dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

try {
  // Tentativa de Divisão, se for possível
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Você deve fornecer números válidos.");
  }

  if (numero2 === 0) {
    throw new Error("Não é possível dividir por zero.");
  }

  let resultado = numero1 / numero2;
  console.log(`O resultado da divisão é: ${resultado}`);
} catch (erro) {
  // Captura e trata exceções
  console.error(`Ocorreu um erro: ${erro.message}`);
} finally {
  // Executa este bloco de código independentemente de exceções ou não.
  console.log("O programa foi encerrado.");
}
```

Neste código, usei o ```parseFloat()``` para converter as entradas do usuário em números de ponto flutuante. Em seguida, usei o bloco ```try``` para tentar realizar a operação de divisão. Se alguma exceção for lançada dentro do bloco ```try```, o código no bloco ```catch``` será executado, e a mensagem de erro será exibida. O bloco ```finally``` é opcional e é usado para executar código que deve ser executado independentemente de ocorrer ou não uma exceção.

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/0e089968-2415-4033-858a-2eb62299fdf8)
