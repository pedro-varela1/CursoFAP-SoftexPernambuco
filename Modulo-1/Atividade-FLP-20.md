# Atividade Filas, Listas e Pilhas - CodePark

## Instrução
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

## Solução
### Fila (FIFO: First-In-First-Out)
Na fila, o primeiro elemento inserido será o primeiro a ser removido (FIFO).

Sequência de remoção na fila: 3, 7, 9, 1, 0.

### Lista
Uma lista encadeada podemos percorrer a lista e escolher a melhor sequência de remoção.

Sequência de remoção possível da lista: 0, 1, 9, 7, 3.

### Pilha (LIFO: Last-In-and-First-Out)
Na pilha, o último elemento inserido será o primeiro a ser removido (LIFO).
Sequência de remoção na pilha: 0, 1, 9, 7, 3.

---

Portanto, a sequência de remoção em cada estrutura de dados para esvaziar o array [3, 7, 9, 1, 0] completamente seria:

- **Fila: 3, 7, 9, 1, 0.**
- **Lista: 0, 1, 9, 7, 3.**
- **Pilha: 0, 1, 9, 7, 3.**
