# Atividade Blockly 2 - CodePark

## Pergunta
Desenvolva, utilizando o Google Blockly, um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:
 
- Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
- Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

No sistema, todos os valores devem estar armazenados em variáveis.

## Algoritmo
O algoritmo foi realizado no Google Blockly, como solicitado:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/d7741143-9ff9-4778-b50b-aa965dbf2671)


Temos o código gerado em JavaScript:
```js
var nota1, nota2, faltas, sum, media;

nota1 = 6;
nota2 = 7.5;
faltas = 0;
sum = nota1 + nota2;
media = sum / 2;

if (media < 7 || faltas > 3) {
  window.alert('REPROVADO');
} else {
  window.alert('APROVADO');
}
```
