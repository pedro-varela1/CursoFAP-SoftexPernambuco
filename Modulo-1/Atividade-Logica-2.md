# Atividade do Professor e das Cadeiras

## Pergunta
Em uma sala de aula, há vinte e cinco alunos.
Entre eles, existem os grupos dos que gostam de Português (P) e os que gostam de Matemática (M).
Eles são divididos conforme a ilustração 1 em anexo.

Depois de um tempo, chegaram mais onze alunos nessa turma e o professor organizou-a conforme a ilustração 2 em anexo.

No entanto, o professor se ausentou da sala por cinco minutos e, ao voltar, percebeu que um aluno que gosta de uma das disciplinas havia trocado de lugar com alguém que prefere a outra, e a turma ficou organizada conforme a ilustração 3 em anexo.

Sabendo que o professor tem dificuldade de memorizar, informe como ele descobriu a cadeira em que houve a troca de alunos e qual a disciplina de cada um.

## Desenvolvimento
Inicialmente, na sala, haviam 25 alunos que gostavam de Português (P) ou Matemática (M), após a adiação dos 11 alunos, a sala ficou em uma configuração peculiar: observe que os alunos novos foram adicionados nas fileiras dos lados e na fileira de baixo, somente; além disso, em cada linha e coluna sempre havia 4 alunos M e 2 alunos P (4M2P) ou 2 alunos M e 4 alunos P (2M4P). Quando o professor se ausentou da sala, houveram duas linhas com 3M3P e uma coluna com 5M1P e outra com 3M3P, ou seja, a intersecção dessas linhas e colunas que mudaram são possibilidades de alunos que trocaram.

Há, então, 4 alunos suspeitos de trocas, se olharmos as intersecções - isso significa que houve uma troca nessa diagonal, já que se modificaram 2 linhas e 2 colunas, se fosse uma troca na mesma linha ou mesma coluna, só uma linha e uma coluna iria se modificar. Com isso, restam duas possibilidades de troca, P1 e P2 na figura. Se fizermos a troca considerando P2, vemos que haverá 4M seguidos na coluna 3, mas isso não aconteceu em nenhum momento, houveram no máximo 3P ou 3M seguidos nos outros casos. Portanto, a possibilidade de troca que sobrou é P1, destacada em vermelho.

![Logic](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/175a51e9-7316-4439-a0f3-f52c15cb73ed)

## Resultado
O aluno que gostava de Português (P) na linha 4 e coluna 3 trocou de cadeira com o aluno que gostava de Matemática (M) na linha 5 e coluna 5.
