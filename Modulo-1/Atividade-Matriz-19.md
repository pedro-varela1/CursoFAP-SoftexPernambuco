# Atividade Matriz - CodePark

## Instrução
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

## Algoritmo e Código
A matriz foi criada com as colunas sendo: espécie, classe, idade e nome.

Temos o código em JavaScript:
```js
// Criando a matriz bidimensional para armazenar as informações dos animais
let animais = [
  // [espécie, classe, idade, nome]
  ["Leão", "Felino", 5, "Simba"],
  ["Elefante", "Mamífero", 10, "Manny"],
  ["Baleia", "Mamífero", 3, "Willy"],
  ["Pinguim", "Ave", 2, "Maverick"],
];

// Exemplo de como acessar os dados de um animal específico na matriz
let animal = 2; // Índice do animal selecionado
console.log("Espécie:", animais[animal][0]);
console.log("Classe:", animais[animal][1]);
console.log("Idade:", animais[animal][2]);
console.log("Nome:", animais[animal][3]);
```

Como resultado do código no Programiz, temos:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/8290e18a-f813-4dcd-a730-a150e539d68e)
