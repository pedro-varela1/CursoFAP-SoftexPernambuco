# Atividade 4
- Cadastro de pessoas: tipo de dados

## Instrução
﻿Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.

## Resposta
Primeiramente, antes de codificar, vamos identificar os tipos de cada variável.

- **Nome**: Variável do tipo String, pois é representado com um sequência de caracteres. Exemplo:
```js
let nome = "Pedro Varela";
```

- **Salário**: Variável do tipo número de ponto flutuante (float), pois representa uma quantia financeira que pode incluir casas decimais. Exemplo:
```js
let salario = 25500.75;
```

- **Idade**: Variável do tipo número inteiro (int), pois representa uma quantidade de anos, que não contém parte decimal. Exemplo:
```js
let idade = 21;
```

- **Diploma**: Variável do tipo booleano (bool), pois representa se uma pessoa possui diploma (true) ou se não possui (false). Exemplo:
```js
let diploma = true;
```

Integrando essas partes, o código final em Javascript foi:

```js
// Declaração das variáveis
let nome = "Pedro Varela";
let salario = 25500.75;
let idade = 21;
let diploma = true;

// Exibindo os valores das variáveis
console.log("Nome:", nome);
console.log("Salário:", salario);
console.log("Idade:", idade);
console.log("Possui Diploma:", diploma);
```

O resultado do código acima no ambiente do Programiz foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/782cd688-52a6-4737-b232-9085ba46ecb3)
