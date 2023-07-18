# Pergunta
Em uma inscrição, o usuário informou os seguintes dados:

- Nome: José Almeida da Silva
- CPF: 12345678900
- RG: 9517530
- Altura: 1,78
- Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:
1. A proposta das variáveis;
2. Elaborada a declaração das variáveis;
3. Utilizado o comando de atribuição.

# Desenvolvimento
Podemos realizar a declaração e a atribuições das variáveis em formato de algoritmo genérico.

As variáveis **nome** e **endereço** são do tipo caractere (_char_); as variáveis **cpf** e **rg** são do tipo inteiro (_int_), pois não há necessidade de vírgula para representar; e a variável **altura** é um número real cuja representação necessita de vírgula (_float_).

Vale ressaltar que nenhum dado foi considerado como constante pois pode haver a representação dos dados de outra pessoas nessas variáveis.

## Declaração:

```portugol
var nome: caractere
var cpf: inteiro
var rg: inteiro
var altura: real
var endereco: caractere
```

## Atribuição:

```portugol
nome <- "José Almeida da Silva";
cpf <- 12345678900;
rg <- 9517530;
altura <- 1.78;
endereco <- "Rua A, 380 – Centro – Recife/PE";
```
