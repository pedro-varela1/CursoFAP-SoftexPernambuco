# Atividade 5
- Calculadora de Média

## Instrução
A atividade que faremos é a da "calculadora de média". Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().

## Resposta
O código em Javascript está exposto abaixo.

```js
// Variáveis para armazenar as notas
var nota1, nota2, nota3;

// Função para validar se a nota está no intervalo correto
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
}

// Solicita as notas ao usuário e valida
do {
    nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
} while (!validarNota(nota1));

do {
    nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10):"));
} while (!validarNota(nota2));

do {
    nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10):"));
} while (!validarNota(nota3));

// Calcula a média das notas
var media = (nota1 + nota2 + nota3) / 3;

// Exibe o resultado no console
console.log("A média das notas é: " + media);

```

As notas foram declaradas usando _var_ e depois, foram solicitadas ao usuário usando a função _prompt()_ - ao fazer isso, um laço _do while_ foi utilizado para garantir que as notas estivissem entre 0 a 10 com auxílio da função _validarNota_, que irá retornar falso quando a nota estiver fora de faixa, obrigando o usuário a digitar novamente.

Depois, a média aritmética foi calculada e exibida ao usuário.

O resultado do código acima no ambiente do Programiz é mostrado abaixo. Observe que o código não aceita notas fora de faixa e calcula a média corretamente.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/64bd60d6-5973-4bb5-b986-b8c4f932309e)
