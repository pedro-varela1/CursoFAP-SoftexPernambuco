# Atividade Operadores Lógicos

## Pergunta
Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:

(   ) Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)

(   ) Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)

(   ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)

(   ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não) 

![table](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/899c46e8-2442-4beb-a701-2c9fd74fb0a0)

## Desenvolvimento
- Para o jogador 1, temos: 
  - (pontos >= 100) = True;
  - (moedas >= 5) = True;
  - (enfrentou_chefe == Sim) = True;
  - Teremos então: (**True** and **True** and **True**) = **True**

- Para o jogador 2, temos: 
  - (pontos >= 100) = False;
  - (moedas >= 5) = True;
  - (enfrentou_chefe == Não) = True;
  - Teremos então: (**False** and **True** and **True**) = **False**
 
- Para o jogador 3, temos: 
  - (pontos < 100) = False;
  - (moedas < 5) = False;
  - (enfrentou_chefe == Sim) = True;
  - Teremos então: (**False** or **False** or **True**) = **True**

- Para o jogador 4, temos: 
  - (pontos != 100) = True;
  - (moedas != 5) = True;
  - not(enfrentou_chefe == Não) = False;
  - Teremos então: (**True** or **True** or **False**) = **True**


## Resultado
( V ) Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)

( F ) Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)

( V ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)

( V ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não) 
