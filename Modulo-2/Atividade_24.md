# Atividade 24
- Conceitos de Coleções

## Instrução
﻿Uma competição de tiro ao alvo recebeu as inscrições de cinco participantes: João, Pedro, Luiza, Marcela e Yuri. Na competição, eles obtiveram, respectivamente, as seguintes pontuações individuais: 50, 120, 70, 10 e 34. Com base nos conceitos de coleções (Set, Map, Lista, Pilha) em JavaScript, escreva um código para armazenar essas informações na coleção mais apropriada e de forma que o nome do participante e a sua pontuação estejam em uma mesma estrutura.

## Resposta
Podemos usar um objeto _Map_ para associar o nome do participante à sua pontuação. Essa abordagem é interessante pois permite a adição do nome do usuário como _key_ e sua pontuação como _value_, permitindo fácil acesso, quando comparado com uma matriz.

O código em Javascript está exposto abaixo.

```js
// Criar um objeto Map para armazenar as informações dos participantes
const competicaoTiroAlvo = new Map();

// Adicionar os participantes e suas pontuações ao Map
competicaoTiroAlvo.set('João', 50);
competicaoTiroAlvo.set('Pedro', 120);
competicaoTiroAlvo.set('Luiza', 70);
competicaoTiroAlvo.set('Marcela', 10);
competicaoTiroAlvo.set('Yuri', 34);

// Acessar as informações dos participantes
console.log('Pontuação de João:', competicaoTiroAlvo.get('João'));
console.log('Pontuação de Pedro:', competicaoTiroAlvo.get('Pedro'));
console.log('Pontuação de Luiza:', competicaoTiroAlvo.get('Luiza'));
console.log('Pontuação de Marcela:', competicaoTiroAlvo.get('Marcela'));
console.log('Pontuação de Yuri:', competicaoTiroAlvo.get('Yuri'));
```

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/49583040-4211-4580-8b7d-892f3ece761c)
