# Atividade 18
- Par ou ímpar

## Instrução
Usando a linguagem JavaScript, crie um código com uma função que determine se um número é par ou ímpar.

## Resposta
O código em Javascript está exposto abaixo.

```js
// Função de verificação
function par_ou_impar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Teste para número ímpar
var num1 = 7;
var result1 = par_ou_impar(num1);
console.log(num1 + " é " + result1);

// Teste para número par
var num2 = 4;
var result2 = par_ou_impar(num2);
console.log(num2 + " é " + result2);
```

A função que verifica se o número é par ou ímpar é baseada na estrutura condicional _if else_ - se o resto da divisão por 2 for 0, o número é par, caso contrário, ele é ímpar.

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/a6821073-fd7f-44bc-ba8b-86c2d513a896)
