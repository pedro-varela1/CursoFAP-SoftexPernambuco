# Atividade 19
- Método acessor e método modificador

## Instrução
Usando a linguagem Javascript, crie uma classe e insira, no mínimo, dois atributos nela. No código, utilize o método acessor ```.get()``` e o método modificador ```.set()```.

## Resposta
O código em Javascript está exposto abaixo.

```js
class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  // Método acessor para obter o nome
  get nome() {
    return this._nome;
  }

  // Método acessor para obter a idade
  get idade() {
    return this._idade;
  }

  // Método modificador para definir o nome
  set nome(novoNome) {
    this._nome = novoNome;
  }

  // Método modificador para definir a idade
  set idade(novaIdade) {
    this._idade = novaIdade;
  }
}

const pessoa1 = new Pessoa("Pedro", 21);

console.log(`Nome: ${pessoa1.nome}`);
console.log(`Idade: ${pessoa1.idade}`);

pessoa1.nome = "Roger";
pessoa1.idade = 23;

console.log(`Novo nome: ${pessoa1.nome}`);
console.log(`Nova idade: ${pessoa1.idade}`);
```

No código, foram utilizados 2 atributos para o método acessor (_get nome()_ e _get idade()_) e 2 atributos para o método modificador (_set nome()_ e _set idade()_)

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/242aca63-934b-4e2c-b55b-473560debafc)
