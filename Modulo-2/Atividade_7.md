# Atividade 7
- Calculadora em JS

## Instrução
Com os conceitos aprendidos, crie um programa de calculadora que:
- receba dois valores, que devem ser salvos em variáveis;
-o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.

## Resposta
O código em Javascript está exposto abaixo.

```js
function calcular(valor1, valor2, operador) {
    let resultado;
    let resto;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = Math.floor(valor1 / valor2);
            resto = valor1 % valor2;
            break;
        default:
            return "Operador inválido";
    }

    if (resto !== undefined) {
        return `Resultado: ${resultado}, Resto: ${resto}`;
    } else {
        return `Resultado: ${resultado}`;
    }
}

const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const operador = prompt("Digite o operador (+, -, *, /):");

const resultadoCalculo = calcular(valor1, valor2, operador);
console.log(resultadoCalculo);
```

Para atender os requisitos estabelecidos na instrução, foi criada uma função _calcular_ que recebe os valores e a operação a ser realizada com eles. A função utiliza a estrutura _switch-case_ para estabelecer o resultado conforme o operador dado - na divisão, por exemplo, o resultado da divisão e seu resto são armazenados, e, se houver um resto, a função o retorna juntamente com o resultado.

Além da operação, o código solicita os valores e os armazenam como _float_, chama a função anteriormente descrita passando esses parâmetros como argumento e, por fim, expõe o resultado na tela. Abaixo, vemos o processo feito no Programiz:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/b463da53-88b0-4b21-8183-b8764f6a75df)
