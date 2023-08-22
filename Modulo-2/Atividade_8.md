# Atividade 8
-  Aprovação e Nota Mínima

## Instrução
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.

## Resposta
### Código 1
O código em Javascript está exposto abaixo.

```js
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`O aluno está ${resultado} com média ${media.toFixed(2)}`);
```
Primeiramente, as notas foram solicitadas ao usuário e, então calculou-se a média. O operador ternário foi utilizada para atribuir _"Aprovado"_, se a média fosse maior ou igual que 7, e _"Reprovado"_, caso contrário. Depois, esse resultado e a média (com precisão de 2 casas decimais são mostrados ao usuário.

Abaixo, vemos o processo feito no Programiz:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/784d6321-aed6-4e25-89a2-da7b96ecc7ba)

### Código 2
O código em Javascript está exposto abaixo.

```js
let notaAtual1 = parseFloat(prompt("Digite a primeira nota atual:"));
let notaAtual2 = parseFloat(prompt("Digite a segunda nota atual:"));

let notaMinima = (7 * 3) - (notaAtual1 + notaAtual2);

console.log(`Para obter média 7, o aluno precisa tirar pelo menos ${notaMinima.toFixed(2)} na próxima prova.`);
```
Após a coleta das notas, criou-se a variável _notaMinima_ para armazenar a nota mínima necessária para a aprovação. Seu cálculo foi feito considerando a média sendo, no mínimo 7:

$media = (n_1 + n_2 + n_3)/3 >= 7$

$n_3 >= 21 - (n_1 + n_2)$

Abaixo, vemos o processo feito no Programiz:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/9fc8fa0f-e775-47a8-a3f4-594d6546bfc8)
