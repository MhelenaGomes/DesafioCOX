# Desafio Cox 

## O que é
O desafio consiste criar e automarizar um conjunto de testes para uma aplicação WEB,utilizando Cypress.

## Requisitos e Critérios Avaliados:
1. O projeto deve ser desenvolvido em Cypress.
2. Os testes devem ser realizados utilizando a aplicação web SwagLabs.
3. Utilizar boas praticas de desenvolvimento de teste sempre que possivel.
4. O codico deve ser comentado, explicando a finalidade e o funcionamento de cada caso de teste.

## Sistema Web
Link: https://www.saucedemo.com/v1/

## Como Rodar a Aplicação

Clonar repositório
```
https://github.com/MhelenaGomes/DesafioCOX.git

```
Acesse a pasta do projeto

```
cd DesafioCOX

```
Execute o comando

```
npm run cypress:open

```
### Casos de Teste:
- **Cenário 1: Login Válido**
_Descrição do teste:_ Este caso de teste consiste em verificar o acesso ao login, utilizando usuario e senha correta.
- **Cenário 2: Login Invalido**
_Descrição do teste:_ Este caso de teste consiste em verificar o acesso ao login, utilizando usuario e senha incorretos.
- **Cenário 3: logout.**
_Descrição do teste:_ Este caso de teste consiste em verificar se o logout é efetuado com sucesso.
- **Cenário 4: Acesso Não Autorizado**
_Descrição do teste:_ Este teste consiste em fazer acesso a uma URL, que teoricamente, não seria autorizada sem o login,
  porém foi comprovado que é possível apesar da ausência de autenticação, o que configura uma falha de segurança.
  Sendo assim, não foi possível concluir o cenário.
  OBS:FOI ADICIONADO O SKIP INICIAL.
- **Cenário 5: Adicionar e verificar produtos no carrinho**
_Descrição do teste:_ Este caso de teste consiste em verificar se os produtos foram adicionados corretamente ao carrinho.
tambem consiste em verificar o contador de itens do icone carrinho.
- **Cenário 6: Remover e verificar produtos no carrinho**
_Descrição do teste:_ Este caso de teste consiste em verificar se 2 produto que foi adicionado ao carrinho foi removido 1 produto do carrinho, restando assim o total de 1 produtos. Tambem consiste em verificar o contador de itens do icone carrinho apos remover produto.
- **Cenário 7: Finalizar compra com Sucesso**
_Descrição do teste:_Este caso de teste consiste verificar a conclusão de compra, inserindo todos os campos obrigatorios corretamente até finalizar o pedido.
- **Cenário 8: Campos obrigatorios**
 _Descrição do teste:_Este caso de teste consiste em verificar se as mensagens de validação estão sendo exibidas ao tentar prosseguir sem preencher os campos obrigatorios corretamente.



  









 