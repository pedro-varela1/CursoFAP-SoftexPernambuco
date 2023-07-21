# Atividade Blockly 2 - CodePark

## Pergunta
Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

## Algoritmo
O algoritmo foi realizado no Google Blockly, como solicitado:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/07eb0de6-fe7f-4df5-9023-47c2132cf77c)

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/d4291db9-0ffe-4527-b895-53e62912c228)

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/b4541b6f-3fdd-4245-9f70-42c9a1e8f0b3)


Temos o código gerado em JavaScript:
```js
var rodas, peso, pessoas;


rodas = 4;
peso = 1000;
pessoas = 5;

if (rodas == 2 || rodas == 3) {
  window.alert('Categoria A');
} else if (rodas == 4 && pessoas <= 8 && peso <= 3500) {
  window.alert('Categoria B');
} else if (rodas >= 4 && peso > 3500 && peso <= 6000) {
  window.alert('Categoria C');
} else if (rodas >= 4 && pessoas > 8) {
  window.alert('Categoria D');
} else if (rodas >= 4 && peso > 6000) {
  window.alert('Categoria E');
} else {
  window.alert('Categoria não identificada');
}
```
