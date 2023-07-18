# Pergunta
Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.


# Algoritmo

```portugol
var transporte, resposta: caractere

inicio
escreva("Escolha o seu meio de transporte entre trator, moto ou bibicleta.");

escreva("Seu meio de transporte é terrestre? ");
leia(resposta);
se(resposta=="Sim") entao
  escreva("Você usa capacete? ");
  leia(resposta);
  se(resposta=="Sim") entao
    escreva("Seu meio de transporte é a MOTO");
  senao
    escreva("Cabe apenas uma pessoa? ");
    leia(resposta);
    se(resposta=="Sim") entao
      escreva("É pesado? ");
      leia(resposta);
      se(resposta=="Sim") entao
        escreva("Seu meio de transporte é o TRATOR");
      senao
        escreva("Tem pedal? ");
        leia(resposta);
        se(resposta=="Sim") entao
          escreva("Seu meio de transporte é a BICICLETA");
        senao
          escreva("Você não escolheu dentre as opções");
    senao
      escreva("Você não escolheu dentre as opções");
senao
  escreva("Você não escolheu dentre as opções");

fimalgoritmo
```
