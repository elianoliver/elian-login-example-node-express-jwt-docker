
# XYZ

...

## Ferramentes necessárias

### [VSCode](https://code.visualstudio.com/)

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versão Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

### [Node.js](https://nodejs.org/en/)

O Node.js é um ambiente de execução JavaScript baseado no motor V8 do Chrome. Ele permite que você execute código JavaScript no lado do servidor, fora de um navegador da web. O Node.js é amplamente utilizado para criar aplicativos de rede e é conhecido por sua escalabilidade e desempenho.

### [NPM](https://www.npmjs.com/)

O npm (Node Package Manager) é o gerenciador de pacotes padrão para o ecossistema do Node.js. Ele é uma ferramenta essencial para desenvolvedores Node.js, pois permite instalar, gerenciar e compartilhar bibliotecas e ferramentas JavaScript de maneira eficiente.

## Initialização do Projeto

### Inicialização do Projeto

Para inicializar um projeto Node.js, você precisa criar um arquivo package.json na raiz do projeto. Este arquivo contém metadados sobre o projeto, como o nome, a versão, as dependências e os scripts de execução.

Para criar um arquivo package.json, você pode executar o comando npm init na raiz do projeto. Isso iniciará um assistente interativo que o guiará na criação do arquivo package.json.

```bash
npm init -y
```

Este comando cria um arquivo package.json com as configurações padrão. Se você deseja personalizar as configurações, pode responder às perguntas do assistente interativo com o comando ```npm init``` sem a opção -y. 

## Instalção de dependencias

O npm (Node Package Manager) é o gerenciador de pacotes padrão para o ecossistema do Node.js. Ele é uma ferramenta essencial para desenvolvedores Node.js, pois permite instalar, gerenciar e compartilhar bibliotecas e ferramentas JavaScript de maneira eficiente.

Aqui está uma explicação dos comandos npm mais comuns:

1. __npm install__ (_ou npm i_):
    - O comando npm install é usado para instalar pacotes JavaScript listados em um arquivo package.json ou para instalar pacotes explicitamente fornecidos como argumentos.
    - Quando você executa npm install, o npm baixa e instala os pacotes especificados e suas dependências, garantindo que todas as dependências estejam disponíveis para o seu projeto.
    - Por exemplo, ao executar npm install express, o npm instalará a biblioteca Express no seu projeto, adicionando-a como uma dependência no arquivo package
    - json e baixando-a para o diretório node_modules.

2. __npm install --save-dev__ (ou _npm install -D_ ou _npm i -D_):
    - O comando npm install --save-dev é uma variação do npm install que instala pacotes como dependências de desenvolvimento, em vez de dependências de produção.
    - As dependências de desenvolvimento são pacotes que são necessários apenas durante o processo de desenvolvimento, como ferramentas de compilação, testes ou ferramentas de análise de código.
    - Quando você executa npm install --save-dev, o npm instala os pacotes especificados e os adiciona como dependências de desenvolvimento no arquivo package.json.
    - Por exemplo, se você estiver usando um pacote como o Jest para testes unitários em seu projeto, você pode instalá-lo como uma dependência de desenvolvimento usando npm install --save-dev jest.

Resumindo, o `npm install` é usado para instalar pacotes como dependências normais do projeto, enquanto o `npm install --save-dev` é usado para instalar pacotes que são necessários apenas durante o desenvolvimento. Ambos os comandos ajudam a gerenciar as dependências do seu projeto de forma eficaz,  garantindo que seu código funcione corretamente e seja fácil de manter.

Assim sendo, usare-mos os comandos `npm install` e `npm install --save-dev` para instalar as dependências do projeto:

```bash
npm install express cors zod dotenv  jsonwebtoken sqlite sqlite3
npm install --save-dev @types/express @types/jsonwebtoken @types/node nodemon ts-node typescript
```

### Dependências do Projeto


#### [Express](https://expressjs.com/pt-br/)

O Express é um framework para aplicativos da web do Node.js. Ele fornece uma série de recursos para criar aplicativos da web e APIs, como roteamento, middleware, manipulação de solicitações e respostas e muito mais.

#### [Cors](https://expressjs.com/en/resources/middleware/cors.html)

O CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança que permite que recursos da web restritos sejam solicitados em um domínio diferente do domínio de origem. Ele é usado para proteger os usuários de sites maliciosos que podem tentar roubar informações confidenciais ou executar ações maliciosas em seu nome.

#### [Zod]()

O Zod é uma biblioteca de validação de esquema para TypeScript e JavaScript. Ele permite que você defina esquemas de validação de dados de forma declarativa e os use para validar e transformar dados em seu aplicativo.

#### [Dotenv](https://www.npmjs.com/package/dotenv)

O Dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo .env em um aplicativo Node.js. Ele é útil para armazenar informações confidenciais, como chaves de API, senhas e tokens de acesso, fora do código-fonte e acessá-las de forma segura em seu aplicativo.

#### [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

O Jsonwebtoken é uma biblioteca para criar e verificar tokens de autenticação JWT (JSON Web Tokens) em aplicativos Node.js. Ele é amplamente utilizado para autenticar usuários e proteger rotas em aplicativos da web e APIs.

#### [Sqlite](https://www.npmjs.com/package/sqlite)

O Sqlite é um banco de dados SQL embutido que é amplamente utilizado em aplicativos da web e móveis. Ele é leve, rápido e fácil de usar, tornando-o uma escolha popular para aplicativos que precisam de um banco de dados local.

#### [Sqlite3](https://www.npmjs.com/package/sqlite3)

O Sqlite3 é um driver Node.js para o banco de dados SQLite. Ele fornece uma API simples e eficiente para interagir com bancos de dados SQLite em aplicativos Node.js.

#### [Typescript](https://www.typescriptlang.org/)

O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao idioma. Ele é amplamente utilizado em aplicativos Node.js e da web para melhorar a segurança, a legibilidade e a manutenção do código.

#### [Nodemon](https://www.npmjs.com/package/nodemon)

O Nodemon é uma ferramenta que monitora alterações em arquivos em um aplicativo Node.js e reinicia automaticamente o servidor quando as alterações são detectadas. Ele é útil durante o desenvolvimento de aplicativos Node.js, pois permite que você veja as alterações refletidas no servidor em tempo real.

#### [Ts-node](https://www.npmjs.com/package/ts-node)

O Ts-node é um interpretador TypeScript para Node.js que permite executar arquivos TypeScript diretamente no Node.js. Ele é útil durante o desenvolvimento de aplicativos Node.js em TypeScript, pois elimina a necessidade de compilar manualmente os arquivos TypeScript em JavaScript antes de executá-los.

### Dependências de Tipos

O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao idioma. Ele é amplamente utilizado em aplicativos Node.js e da web para melhorar a segurança, a legibilidade e a manutenção do código.

Para instalar as dependências de tipos para o TypeScript, você pode usar o comando npm install --save-dev @types/package-name. Por exemplo, para instalar os tipos para o Express, você pode executar o seguinte comando:

Neste projeto temos as seguintes dependências de tipos:

- @types/express: fornece tipos TypeScript para o Express.
- @types/jsonwebtoken: fornece tipos TypeScript para o Jsonwebtoken.
- @types/node: fornece tipos TypeScript para o Node.js.

## Configuração do ambiente

### Configuração do TypeScript

O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao idioma. Ele é amplamente utilizado em aplicativos Node.js e da web para melhorar a segurança, a legibilidade e a manutenção do código.

Para configurar o TypeScript em um projeto Node.js, você precisa criar um arquivo de configuração tsconfig.json na raiz do projeto. Este arquivo contém as configurações do compilador TypeScript, como o diretório de saída, os módulos a serem usados e as opções de compilação.

Um arquivo padrão tsconfig.json pode ser gerado automaticamente executando o comando tsc --init na raiz do projeto. Isso criará um arquivo de configuração tsconfig.json com as configurações padrão.

Porém as configurações que usaremos são as seguintes:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Neste arquivo, definimos as seguintes opções de configuração:

- target: especifica a versão do ECMAScript para a qual o código TypeScript será compilado. Neste caso, estamos compilando para ES6.

- module: especifica o sistema de módulos a ser usado. Neste caso, estamos usando o CommonJS, que é o sistema de módulos padrão do Node.js.

- outDir: especifica o diretório de saída para os arquivos JavaScript compilados. Neste caso, estamos usando o diretório dist.

- strict: ativa as verificações de tipo estritas no compilador TypeScript. Isso ajuda a detectar erros de tipo em seu código.

- esModuleInterop: ativa a interoperabilidade de módulos ES6 e CommonJS. Isso permite que você importe módulos ES6 em arquivos CommonJS e vice-versa.

- include: especifica os arquivos a serem incluídos na compilação. Neste caso, estamos incluindo todos os arquivos TypeScript na pasta src.

- exclude: especifica os arquivos a serem excluídos da compilação. Neste caso, estamos excluindo a pasta node_modules.

## Execução

```bash
npm run dev
```