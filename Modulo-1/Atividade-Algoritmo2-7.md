# Pergunta
Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.


# Algoritmo

```portugol
var numero, i: inteiro

inicio
escreva("Digite o número a se fazer a tabuada: ");
leia(numero);

escreva("A tabuada de: ", numero, " é:");

para i de 1 ate 10 faca
escreva(numero, "x", i, "=", (x*i)) // O formato da tabuada será por exemplo: 2x1=2, 2x2=4 e assim por diante até i=10. 
escreva("\n") \\ Pular linha.
fim para

fimalgoritmo
```
