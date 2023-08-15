# Atividade 3
- Dados: tipos de variáveis

## Instrução
Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis do tipo boolean, Bigint, string e symbol. No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela.

## Resposta
O código em Javascript está disponibilizado abaixo. No código, temos as três partes solicitadas no enunciado da questão: exibir variáveis somente com a declaração, exibí-las após a definição como _null_ e depois exibí-las com valores atribuídos.

```js
// Criando variáveis dos diferentes tipos
let boolean_var;
let bigint_var;
let string_var;
let symbol_var;

// Exibindo os conteúdos iniciais (UNDEFINED)
console.log("Conteúdos iniciais:");
console.log("boolean_var:", boolean_var);
console.log("bigint_var:", bigint_var);
console.log("string_var:", string_var);
console.log("symbol_var:", symbol_var);

// Atribuindo valores nulos às variáveis
boolean_var = null;
bigint_var = null;
string_var = null;
symbol_var = null;

// Exibindo os conteúdos após atribuição de valores nulos
console.log("\nConteúdos após atribuição de valores nulos:");
console.log("boolean_var:", boolean_var);
console.log("bigint_var:", bigint_var);
console.log("string_var:", string_var);
console.log("symbol_var:", symbol_var);

// Atribuindo valores dos tipos correspondentes
boolean_var = true;
bigint_var = 1234567890123456789012345678901234567890n;
string_var = "Pedro é lindo";
symbol_var = Symbol("simbolo");

// Exibindo os conteúdos após atribuição de valores
console.log("\nConteúdos após atribuição de valores:");
console.log("boolean_var:", boolean_var);
console.log("bigint_var:", bigint_var);
console.log("string_var:", string_var);
console.log("symbol_var:", symbol_var);
```

O resultado do código acima no ambiente do Programiz foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/275a8fcc-5c2f-4374-a459-2631fb85879b)

