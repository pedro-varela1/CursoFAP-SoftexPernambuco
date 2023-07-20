# Atividade Fluxograma - CodePark

## Pergunta
No hipertexto anterior, temos um exemplo de um fluxograma que realiza o cálculo da média de duas notas de um aluno. O fluxograma solicita duas notas que serão somadas, e logo em seguida a média dessas notas é calculada. Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO, quando menor que 7 o aluno está REPROVADO.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/bda2b25c-edbf-4fc8-8549-bd8117c11cc1)

## Fluxograma
O fluxograma foi feito no Google Bockly, como solicitado. O algoritmo gera números aleatórios entre 0 e 10 para simularem as notas do aluno e depois tira a médio. Por fim, é mostrado ao usuário as notas e sua situação ("APROVADO" ou "REPROVADO")

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/c3915f73-d2c5-459a-a4d5-104b6b7fdd41)

Temos o código gerado em JavaScript:

```js
var Nota1, Nota2, Sum_Notas, Media;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

Nota1 = mathRandomInt(0, 10);
Nota2 = mathRandomInt(0, 10);
Sum_Notas = Nota1 + Nota2;
Media = Sum_Notas / 2;
window.alert(Nota1);
window.alert(Nota2);
if (Media >= 7) {
  window.alert('APROVADO');
} else {
  window.alert('REPROVADO');
}
```

