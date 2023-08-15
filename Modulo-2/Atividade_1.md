# Atividade 1
- Inspeção de Elementos de Página da Web

---

## Instrução
Acesse pelo menos dois sites de sua preferência e os inspecione com o botão direito do mouse na página web. Com o código fonte aberto você deve:
- Verificar no código algum elemento que utilize JavaScript;
- Marcar alguns elementos do site;
- Explicar como ele se comporta. Exemplo: entrar no site do Google, inspecionar o botão de pesquisa, verificar o código e explicar qual a finalidade do botão.

## Resposta
Primeiramente, abri o site do Google (www.google.com) e inspecionei a página com o comando _Ctrl+Shift +I_.

Feito isso, selecionei a guia "Elementos" do painel de inspeção. A figura abaixo mostra o painel com os elementos da página.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/a3f74466-bc2b-49bb-adb0-542388883efb)

Em seguida, selecionei o elemento que representa o símbolo do Google, como está destacado abaixo.

![image](https://github.com/pedro-varela1/CursoFAP-SoftexPernambuco/assets/93870597/4da6d8bd-ecff-4d52-af13-6686588899a4)

Esse símbolo é representado por uma imagem com as seguintes definições:

```html
<img class="lnXdpd" alt="Google" height="92" src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x" width="272" data-atf="1" data-frt="0">
```
Algumas características relevantes desse elemento são: 
- É uma imagem que tem a seguinte URL: _/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png_;
- Possui altura de 92, com base na unidade estabelecida para os elementos de  um HTML;
- E o atributo _alt_ promove um texto alternativo _Google_ para aqueles usuários que não conseguem ver, devido à problemas de conexão, por exemplo.
