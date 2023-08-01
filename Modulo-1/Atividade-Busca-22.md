# Atividade Busca Linear e Binária- CodePark

## Instrução
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

## Solução: Algoritmo e Código
Observe que a lista está desordenada, então, não é possível aplicar o método de busca binária diretamente, somente o método de busca linear.

Porém, sabemos que o método de busca linear de $n$ itens tem, no pior caso, $O(n)$. Enquanto que o método de busca binária tem $O(logn)$.

Por isso, podemos realizar a estratégia de ordenar os itens para poder aplicar o método de busca binária.

Observe abaixo a função de busca binária para encontrar o valor (_target_) dentro do array (_arr_):
```js
function buscaBinaria(arr, target) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    const valorMeio = arr[meio];

    if (valorMeio === target) {
      return meio;
    } else if (valorMeio < target) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1; // Retorna -1 se o elemento não for encontrado no array
}
```
Veja que, como o índice do array sempre começa em 0, o seu primeiro índice é 0 (_inicio_) e o último índice é o tamanho do array menos um ($arr.length - 1$).

E, percorrento todos os "meios" do array, é retornado o índice desse "meio" se ele for igual ao target, se não, é analisado um novo "meio", a depender se ele é maior ou menor que o target. Se esse target não for encontrado no vetor, é retornado -1.

Como dito, é necessário ordenar o array antes de passar por essa função. Para isso, é utilizado a função _sort()_. Observe a maneira de utilização:
```js
array.sort((a, b) => a - b)
```
A função de comparação $(a, b) => a - b$ é passada para o sort. Essa função é um comparador numérico simples que subtrai _b_ de _a_. Ela retorna um valor negativo se _a_ for menor que _b_, um valor positivo se _a_ for maior que _b_, e 0 se _a_ e _b_ forem iguais.

Essa função de comparação é necessária porque o método sort por padrão classifica os elementos do array como strings. Isso pode levar a resultados inesperados quando o array contém números, pois os números são ordenados lexicograficamente como strings.

Portanto, a chamada `array.sort((a, b) => a - b)` garante que o array seja ordenado numericamente antes de realizar a busca binária, para que a busca seja feita corretamente.

---

Temos a função completa em JavaScript:
```js
function buscaBinaria(arr, target) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    const valorMeio = arr[meio];

    if (valorMeio === target) {
      return meio;
    } else if (valorMeio < target) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1; // Retorna -1 se o elemento não for encontrado no array
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const target = 20;

const indice = buscaBinaria(array.sort((a, b) => a - b), target);

if (indice !== -1) {
  console.log(`O número ${target} foi encontrado no índice ${indice}.`);
} else {
  console.log(`O número ${target} não foi encontrado no array.`);
}
```
Temos a seguinte saída do Replit, rodando o código como index.js do Node.js:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/da1d6cbe-ddb7-4c94-bd79-639c09a3d7b4)
