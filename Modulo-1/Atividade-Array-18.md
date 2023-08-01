# Atividade Array - CodePark

## Instrução
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

## Algoritmo e Código
Primeiro as listas foram criadas e mostradas; depois um cor e uma idade foi modificada; em seguida, as listas foram expostas novamente.

Temos o código em JavaScript:
```js
// Criar as três listas
let nomes = ['Ana', 'Enio', 'Carlos', 'Diana', 'Chico', 'Alfredo', 'Gabriel', 'Pedro', 'Artur', 'João'];
let idades = [25, 30, 12, 28, 33, 19, 27, 21, 29, 19];
let coresFavoritas = ['azul', 'vermelho', 'verde', 'rosa', 'amarelo', 'preto', 'laranja', 'preto', 'branco', 'cinza'];

// Imprimir as listas originais
console.log('Lista de nomes:', nomes);
console.log('Lista de idades:', idades);
console.log('Lista de cores favoritas:', coresFavoritas);

// Modificar uma cor e uma idade
idades[2] = 23; // 12 para 23
coresFavoritas[1] = 'laranja'; // vermelho para laranja

// Imprimir as listas modificadas
console.log('Lista de nomes após modificações:', nomes);
console.log('Lista de idades após modificações:', idades);
console.log('Lista de cores favoritas após modificações:', coresFavoritas);
```
