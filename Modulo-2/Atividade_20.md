# Atividade 20
- Herança (POO)

## Instrução
Usando a linguagem JavaScript, desenvolva uma classe chamada _Pessoa_. Ela precisa possuir, pelo menos, dois objetos. Essa classe servirá como base para a classe _Funcionário_, a qual vai herdar os atributos e métodos da _Pessoa_. Além disso, inclua os atributos adicionais cargo e salário na classe _Pessoa_.

## Resposta
O código em Javascript está exposto abaixo.

```js
// Classe Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

// Classe Funcionario que herda da classe Pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo, salario) {
    super(nome, idade);
    this.cargo = cargo;
    this.salario = salario;
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Cargo: ${this.cargo}`);
    console.log(`Salário: ${this.salario}`);
  }
}

// Exemplo de uso das classes
const pessoa1 = new Pessoa("Pedro", 21);
const funcionario1 = new Funcionario("Aurea", 46, "Professora", 6000);

console.log("Informações da Pessoa:");
pessoa1.exibirInformacoes();

console.log("\nInformações do Funcionário:");
funcionario1.exibirInformacoes();
```

a classe _Pessoa_ possui os atributos _nome_ e _idade_, enquanto a classe _Funcionario_ possui os atributos _cargo_ e _salário_, além de herdar os atributos e métodos da classe _Pessoa_.

A saída do código foi:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/c6c9f433-f12d-4594-9651-202288b4837d)
