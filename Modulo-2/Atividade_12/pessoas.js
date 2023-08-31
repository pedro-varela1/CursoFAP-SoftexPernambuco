// Array de objetos pessoa
const pessoas = [
  { nome: 'Pedro', idade: 21, profissao: 'Engenheiro Eletricista', cidade: 'Natal' },
  { nome: 'Artur', idade: 30, profissao: 'Professor', cidade: 'Ceará-Mirim' },
  { nome: 'Douglas', idade: 22, profissao: 'Estudante', cidade: 'Santa Cruz' },
  { nome: 'Ana', idade: 28, profissao: 'Médica', cidade: 'Salvador' }
];

// Usando for in
console.log("Usando for-in:");
for (let index in pessoas) {
  const pessoa = pessoas[index];
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Cidade: ${pessoa.cidade}`);
}

// Usando for of
console.log("\nUsando for-of:");
for (let pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}, Cidade: ${pessoa.cidade}`);
}