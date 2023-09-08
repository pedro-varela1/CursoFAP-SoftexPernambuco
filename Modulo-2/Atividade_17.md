# Atividade 17
- Classe e método estático

## Instrução
Usando a linguagem Javascript, crie um código que tenha uma classe e um método estático.

## Resposta
O código em Javascript implemntando um objeto material e um objeto abstrato está exposto abaixo.

```js
class MinhaClasse {
  // Primeiramente, criamos um constructor
  constructor(nome) {
    this.nome = nome;
  }

  // Instanciamento - saudação
  saudacao() {
    console.log(`Olá, ${this.nome}!`);
  }

  // Método estático - mensagem 
  static mensagemEstatica() {
    console.log("Este é um método estático.");
  }
}

// Criar classe e retornar os métodos:
const objeto = new MinhaClasse("Usuário");

objeto.saudacao();

MinhaClasse.mensagemEstatica();
```

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/c7affc19-293f-4062-81e7-9011c1d3711c)
