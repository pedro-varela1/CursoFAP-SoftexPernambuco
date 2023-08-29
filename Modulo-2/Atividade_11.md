# Atividade 11
- Objetos

## Instrução
Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.
Observações:
- **buscar** saldo deve retornar o valor atual do saldo;
- para o **depósito**, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; 
- para o **saque**, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto,
- o **número da conta** deve retornar o número da conta.

## Resposta
O código em Javascript está exposto abaixo.

```js
const Banco = {
  tipo_conta: "Poupança",
  agencia: "0123",  
  conta: "456789",
  saldo: 0,
  
  buscar_saldo: function() {
    return this.saldo;
  },
  
  deposito: function(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return true;
    } else {
      return false;
    }
  },
  
  saque: function(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  },
  
  numero_conta: function() {
    return (this.agencia + ' ' + this.conta);
  }
};

console.log("Saldo atual:", Banco.buscar_saldo());
console.log("Número da conta:", Banco.numero_conta());

let valor_deposito = 1000;
if (Banco.deposito(valor_deposito)) {
  console.log(`Depósito de ${valor_deposito} realizado com sucesso. Novo saldo:`, Banco.buscar_saldo());
} else {
  console.log("Depósito inválido.");
}

let valor_saque = 950;
if (Banco.saque(valor_saque)) {
  console.log(`Saque de ${valor_saque} realizado com sucesso. Novo saldo:`, Banco.buscar_saldo());
} else {
  console.log("Saque inválido.");
}

valor_saque = 51;
if (Banco.saque(valor_saque)) {
  console.log(`Saque de ${valor_saque} realizado com sucesso. Novo saldo:`, Banco.buscar_saldo());
} else {
  console.log("Saque inválido.");
}
```

Acima, podemos ver a declaração do objeto _Banco_ que possui as seguintes propriedades: _buscar_saldo_, _deposito_, _saque_, _numero_conta_, que realizam as funções descritas na instrução.

O saldo saldo começa em 0, depois um depósito de 1000 é feito, após isso, dois saques consecutivos são feitos: um saque de 950 é feito com sucesso e outro de 51 é inválido, pois só há 50 na conta.

O código, após ser executado no VSCode, apresentou o seguinte resultado:

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/ef487542-3174-41d2-98ab-08b0ebf424d7)
