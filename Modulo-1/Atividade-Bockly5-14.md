# Atividade Blockly 4 - CodePark

## Instrução
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:

1. Soma
2. Subtração
3. Multiplicação
4. Divisão
0. Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

## Algoritmo
O algoritmo foi realizado no Google Blockly, como solicitado. 

A função da calculadora foi baseada na  atividade anterior.
![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/651c1cb5-20d0-4513-bc4c-027ac5a05cee)

Além disso, como solicitado, se a operation digitada por 0, haverá um break no loop e o programa finaliza; e caso a operação for inválida ele retornará ao menu.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/868224da-7890-48d4-9130-4667eeb702ff)
![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/3a910b84-6070-43f7-8fa1-40c5a8495dc9)
![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/3eb5d8f0-434b-49ea-9247-5647ef406e91)
![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/66f3ab82-371a-40de-b096-3fc62f21a594)

Temos o código gerado em JavaScript:
```js
var num1, num2, operation, result;

// Describe this function...
function calculator(num1, num2, operation) {
  if (operation == 1) {
    result = num1 + num2;
  } else if (operation == 2) {
    result = num1 - num2;
  } else if (operation == 3) {
    result = num1 * num2;
  } else if (operation == 4) {
    result = num1 / num2;
  } else {
    result = 0;
  }
  return result;
}

while (true) {
  operation = Number(window.prompt(['Digite sua operação:','1. Soma; ','2. Subtração; ','3. Multiplicação; ','4. Divisão; ','0. Sair.'].join('')));
  if (operation == 0) {
    break;
  } else if (operation != 1 && operation != 2 && operation != 3 && operation != 4) {
    window.alert('Essa opção não existe.');
  } else {
    num1 = Number(window.prompt('Digite o primeiro número:'));
    num2 = Number(window.prompt('Digite o segundo número:'));
    window.alert('O resultado é: ' + String(calculator(num1, num2, operation)));
  }
}
```
