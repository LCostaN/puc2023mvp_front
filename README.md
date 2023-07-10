# Projeto API MVP1

Este projeto é a interface visual (Front-End) do MVP 1 - PUC RJ, desenvolvido por Lucas Nantes da Costa utilizando as tecnologias HTML, CSS e Javascript e o framework Vue3 de trabalho.

O projeto foi criado pelo comando `npm create vite@latest`.

[Informações relacionadas ao framework podem ser encontradas aqui](https://vitejs.dev/guide/)

## Descrição

O projeto Dog Care consiste em um agendamento de banho para cães.
Também permite visualizar a lista de produtos em estoque para os clientes que vão visitar o pet shop.
Não permite compra online, no entanto.

## Como executar

Para executar o projeto em desenvolvimento, devemos:

1. Instalar as dependências do projeto
2. Executá-lo em modo de desenvolvimento

O framework também possui um método de construção para compilar o código com qualidade
de produção, ou seja, como produto real. Porém não é necessário realizar tal ação para
testar o projeto devido a seus fins didáticos.

### 1. Instalar dependências

Rode o comando abaixo para instalar as dependências do projeto.

```sh
npm install
```

### 2. Compilar e executar para desenvolvimento

O comando abaixo executará o projeto em modo de desenvolvimento.
O projeto pode ser acessado em <http://localhost:5173>.

*Observação: 5173 é a porta padrão utilizada pelo framework. Caso a porta esteja ocupada, ele tentará iniciar o projeto em outra porta. Você pode verificar a porta utilizada nas mensagens que aparecem após execução do comando. Se for o caso, o projeto deve ser acessado em **localhost:< porta >**.*

*Observação 2: Caso o problema de porta aconteça no servidor, as rotas de comunicação com o backend irão falhar pois este busca o backend em localhost:5000. Configure a URL_BASE em < projeto >/src/services/ApiService.js para nova porta se necessário.*

```sh
npm run dev
```

### (Opcional) Compilar e minimizar para produção

O comando de build descrito abaixo, gera um código minimizado para ser colocado no servidor
que disponibilizará a aplicação online.

Minimização do código significa remover o máximo possível de informação útil para leitura humana
que não afeta a máquina, de forma a tornar o tamanho dos arquivos o menor possível.
Por exemplo, remoção de todos os espaços e troca dos nomes de variável por letras.

```sh
npm run build
```

### (Opcional) Análise de código com [ESLint](https://eslint.org/)

LINT é um conjunto de regras que podem ser configuradas na IDE para que tais regras sejam aplicadas durante o próprio desenvolvimento.
Estas regras são definidas **por projeto** e são provenientes de referências reconhecidas pela comunidade como Airbnb, Google, Facebook e outros que tornaram suas regras públicas.

O LINT não afeta o código em si de forma alguma, apenas ajuda a configurar a IDE para que esta alerte o desenvolvedor quando um código fugir de alguma regra de boa prática pré-difinida.

```sh
npm run lint
```

## Rotas

Devido a estrutura SPA utilizada no projeto, nenhuma rota foi configurada.
Caso qualquer rota seja fornecida, ele será redirecionado sempre a página única deste projeto.

## Comunicação com Backend

Este projeto espera que o Backend esteja sendo executado em <localhost:5000>. Caso por algum motivo a porta 5000 não pode ser utilizada, será necessário alterar URL_BASE em **< projeto >/src/services/ApiService.js** para porta correta.

Neste projeto executamos as seguintes rotas do **Backend**

### /products

- GET -> Listagem de Produtos

### /schedules

- GET -> Listar Agendamento (evita horários ocupados de aparecerem na tela)

### /schedule

- POST -> Realizar Agendamento
