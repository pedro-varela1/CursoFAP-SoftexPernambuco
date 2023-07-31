# Atividade Code 5 - CodePark

## Instrução
Crie um vetor com ponteiros utilizando alocação dinâmica na linguagem C, que:

- use a função realloc;
- use a função sizeof;
- que tenha tamanho 22 de vetor;
- depois libere o bloco utilizando a função free.

## Algoritmo e Código
Depois de inicializadas uma variável para o tamanho do vetor (_size_) e outra para o vetor inteiro com ponteiros (_vetor_ponteiros_), a memória inicial foi alocada através da função _malloc_ com 11x o tamanho de um inteiro - valor obtido através da função _sizeof_.

Após isso, o tamanho do _vetor_ponteiros_ foi alterado para 22x o tamanho de um inteiro com a função _realloc_, ou seja, agora esse vetor pode armazena 22 inteiros.

Por fim, a memório alocada foi liberada através da função _free_.

Temos o código em linguagem C:
```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int size = 11;
    int** vetor_ponteiros;

    // Alocar memória inicial para o vetor de ponteiros
    vetor_ponteiros = (int**)malloc(size * sizeof(int*));

    // Redimensionar o vetor de ponteiros usando realloc
    int new_size = 22; // Novo tamanho do vetor
    vetor_ponteiros = (int**)realloc(vetor_ponteiros, new_size * sizeof(int*));

    // Liberar a memória alocada
    free(vetor_ponteiros);

    return 0;
}
```
