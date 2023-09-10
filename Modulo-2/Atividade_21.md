# Atividade 21
- Pacotes para manipulação de arrays

## Instrução
﻿Luiza é desenvolvedora e está trabalhando com dois arrays. O primeiro é [23, 9, 4, 45] e o segundo é [7, 12]. Ela precisa dividir o primeiro em dois arrays e cada array gerado deve ser concatenado com o segundo array.
1. Qual é o pacote que Luiza precisa utilizar?
2. Se for preciso instalar esse pacote, qual é o comando que deve ser utilizado?
3. Qual é o comando para importar esse pacote?
4. Quais as funções utilizadas neste pacote?
5. Quais serão os arrays resultantes dessa operação?

## Respostas
1. O pacote que Luiza pode usar é o _lodash_, que fornece várias funções para manipulação de arrays.
2. Luiza pode, no terminal, usar o npm (Node Package Manager) para baixar o _lodash_: ```npm install lodash```.
3. No início do código, Luiza pode importar o _lodash_ com a seguinte linha: ```const ld = require('lodash');```.
4. Luiza utilizará a função ```chunck()``` para dividir o array em partes menores. Veja:
```js
const ld = require('lodash');

const array1 = [23, 9, 4, 45];
const array2 = [7, 12];

const arraysDivididos = ld.chunk(array1, 2); // Divide o primeiroArray em partes de tamanho 2

// Concatena cada parte do primeiroArray com o segundoArray
const resultado = arraysDivididos.map(part => part.concat(array2));

console.log(resultado);
```

5. Na saída, vamos obter o seguinte array resultante:
```js
[
  [23, 9, 7, 12],
  [4, 45, 7, 12]
]
```

