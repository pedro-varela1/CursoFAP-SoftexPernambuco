# Atividade 16
- Objetos materiais e abstratos

## Instrução
﻿Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.

## Resposta

Objetos Materiais:
1. Carro
   Atributos:
   - Marca
   - Modelo
   - Ano

   Métodos:
   - Ligar()
   - Desligar()
   - Acelerar()

2. Livro
   Atributos:
   - Título
   - Autor
   - Número de Páginas

   Métodos:
   - Abrir()
   - Fechar()
   - Ler()

Objetos Abstratos:
1. Conta Bancária
   Atributos:
   - Saldo
   - Número da Conta
   - Titular da Conta

   Métodos:
   - Depositar(valor)
   - Sacar(valor)
   - VerificarSaldo()

2. Redes Sociais
   Atributos:
   - Nome da Rede Social
   - Número de Usuários
   - Ano de Lançamento

   Métodos:
   - PublicarPost()
   - SeguirUsuário()
   - CurtirPost()
  
O código em Javascript implemntando um objeto material e um objeto abstrato está exposto abaixo.

```js
// Objeto Material: Carro
const carro = {
  marca: "Toyota",
  modelo: "Hilux",
  ano: 2023,
  ligado: false,

  ligar: function () {
    this.ligado = true;
    console.log("O carro está ligado.");
  },

  desligar: function () {
    this.ligado = false;
    console.log("O carro está desligado.");
  },

  acelerar: function () {
    if (this.ligado) {
      console.log("O carro está acelerando.");
    } else {
      console.log("Não é possível acelerar, o carro está desligado.");
    }
  }
};

// Objeto Abstrato: Redes Sociais
const redeSocial = {
  nome: "Facebook",
  numeroUsuarios: 3000000000,
  anoLancamento: 2004,
  posts: [],

  publicarPost: function (texto) {
    this.posts.push(texto);
    console.log(`Novo post publicado: ${texto}`);
  },

  seguirUsuario: function (usuario) {
    console.log(`Você começou a seguir ${usuario} no ${this.nome}.`);
  },

  curtirPost: function (index) {
    if (index >= 0 && index < this.posts.length) {
      console.log(`Você curtiu o post: ${this.posts[index]}`);
    } else {
      console.log("Post não encontrado.");
    }
  }
};

// Exemplos do objeto Carro
console.log(carro.marca);
carro.ligar();
carro.acelerar();

// Exemplos do objeto Redes Sociais
console.log(redeSocial.nome);
redeSocial.publicarPost("Hoje é um dia ensolarado!");
redeSocial.seguirUsuario("Amigo123");
redeSocial.curtirPost(0);
```

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/5576fffe-e1ee-4d23-8095-2a9c602c9e0e)

