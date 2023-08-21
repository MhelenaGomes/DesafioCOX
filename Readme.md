<img src="https://github.com/MhelenaGomes/DesafioCOX/assets/114106107/05c76763-9ae8-4ebf-8f08-ac4ff88008e0">

# Desafio Cox 

## 📘 Descrição:
O desafio consiste criar e automarizar um conjunto de testes para uma aplicação WEB, utilizando Cypress.

## 📝 Requisitos e Critérios Avaliados:
- [x]  O projeto deve ser desenvolvido em Cypress.
- [x]  Os testes devem ser realizados utilizando a aplicação web SwagLabs.
- [x]  Utilizar boas práticas de desenvolvimento de teste sempre que possível.
- [x]  O código deve ser comentado, explicando a finalidade e o funcionamento de cada caso de teste.

## 🖥️ Sistema Web
Link: https://www.saucedemo.com/v1/

## ⚙️ Como Rodar a Aplicação

Clonar repositório:
```
https://github.com/MhelenaGomes/DesafioCOX.git

```
Acesse a pasta do projeto:

```
cd DesafioCOX

```
Baixar e instalar as dependencias do projeto:

```
npm install

```

Execute o comando:

```
npm run cypress:open

```

### 📝 Casos de Teste:
- **Cenário 1: Login Válido**    
_Descrição do teste:_ Este caso de teste consiste em verificar o acesso ao login, utilizando usuario e senha correta.
- **Cenário 2: Login Invalido**     
_Descrição do teste:_ Este caso de teste consiste em verificar o acesso ao login, utilizando usuario e senha incorretos.
- **Cenário 3: logout**     
_Descrição do teste:_ Este caso de teste consiste em verificar se o logout é efetuado com sucesso.
- **Cenário 4: Acesso Não Autorizado**    
_Descrição do teste:_ Este teste consiste em fazer acesso a uma URL, que teoricamente, não seria autorizada sem o login,
  porém foi comprovado que é possível apesar da ausência de autenticação, o que configura uma falha de segurança.
  Sendo assim, não foi possível concluir o cenário.  
- **Cenário 5: Adicionar e verificar produtos no carrinho**      
_Descrição do teste:_ Este caso de teste consiste em verificar se os produtos foram adicionados corretamente ao carrinho.
tambem consiste em verificar o contador de itens do icone carrinho.
- **Cenário 6: Remover e verificar produtos no carrinho**     
_Descrição do teste:_ Este caso de teste tem como objetivo verificar se, após a remoção de um produto do carrinho de compras que originalmente continha 2 produtos, resta apenas 1 produto no carrinho. Além disso, será verificado se o contador de itens no ícone do carrinho é atualizado corretamente após a remoção do produto.
- **Cenário 7: Finalizar compra com Sucesso**    
_Descrição do teste:_ Este caso de teste consiste verificar a conclusão de compra, inserindo todos os campos obrigatorios corretamente até finalizar o pedido.
- **Cenário 8: Campos obrigatorios**    
 _Descrição do teste:_ Este caso de teste consiste em verificar se as mensagens de validação estão sendo exibidas ao tentar prosseguir sem preencher os campos obrigatorios corretamente.



  









 
