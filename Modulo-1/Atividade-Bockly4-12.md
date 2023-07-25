# Atividade Blockly 4 - CodePark

## Pergunta
Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

## Algoritmo
O algoritmo foi realizado no Google Blockly, como solicitado. A contagem regressiva contou de um valor máximo (time = 10) até 1 de maneira decrescente usando um loop.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/fd0f3f35-8802-4371-9179-208809359c1e)

Temos o código gerado em JavaScript:
```js
var time, i;

time = 10;

window.alert('Iniciando Contagem Regressiva');
var i_inc = 1;
if (time > 1) {
  i_inc = -i_inc;
}
for (i = time; i_inc >= 0 ? i <= 1 : i >= 1; i += i_inc) {
  window.alert(i);
}
window.alert('BUM!');
```
