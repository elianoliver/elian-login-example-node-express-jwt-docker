# Desenvolvimento de um sistema web com Node.js e TypeScript com autenticação JWT e banco de dados SQLite

Neste tutorial, você aprenderá a desenvolver um sistema web com Node.js e TypeScript. O sistema web será uma API RESTful que permite aos usuários criar, ler, atualizar e excluir usuários em um banco de dados SQLite. Além disso, o sistema web terá uma rota de autenticação que permite aos usuários fazer login e gerar um token de autenticação JWT (JSON Web Token).


## Ferramentes necessárias

### [Visual Dtudio Code - VSCode](https://code.visualstudio.com/)

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versão Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

#### Extensões Recomendadas

- [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): Uma extensão do Visual Studio Code para testar solicitações HTTP.

### [Node.js](https://nodejs.org/en/)

O Node.js é um ambiente de execução JavaScript baseado no motor V8 do Chrome. Ele permite que você execute código JavaScript no lado do servidor, fora de um navegador da web. O Node.js é amplamente utilizado para criar aplicativos de rede e é conhecido por sua escalabilidade e desempenho.

### [Node Package Manager - NPM](https://www.npmjs.com/)

O npm (Node Package Manager) é o gerenciador de pacotes padrão para o ecossistema do Node.js. Ele é uma ferramenta essencial para desenvolvedores Node.js, pois permite instalar, gerenciar e compartilhar bibliotecas e ferramentas JavaScript de maneira eficiente.

## Initialização e Configuração do Projeto

Chamamos de inicialização do projeto o processo de configuração de um novo projeto Node.js. Isso envolve a criação de um arquivo package.json, a instalação de dependências e a configuração do ambiente de desenvolvimento.

### Inicialização do Projeto

Para inicializar um projeto Node.js, você precisa criar um arquivo package.json na raiz do projeto. Este arquivo contém metadados sobre o projeto, como o nome, a versão, as dependências e os scripts de execução.

Para criar um arquivo package.json, você pode executar o comando npm init na raiz do projeto. Isso iniciará um assistente interativo que o guiará na criação do arquivo package.json.

```bash
npm init -y
```

Este comando cria um arquivo package.json com as configurações padrão. Se você deseja personalizar as configurações, pode responder às perguntas do assistente interativo com o comando ```npm init``` sem a opção -y. 

### Instalção de dependencias

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

#### Dependências do Projeto


##### [Express](https://expressjs.com/pt-br/)

O Express é um framework para aplicativos da web do Node.js. Ele fornece uma série de recursos para criar aplicativos da web e APIs, como roteamento, middleware, manipulação de solicitações e respostas e muito mais.

##### [Cors](https://expressjs.com/en/resources/middleware/cors.html)

O CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança que permite que recursos da web restritos sejam solicitados em um domínio diferente do domínio de origem. Ele é usado para proteger os usuários de sites maliciosos que podem tentar roubar informações confidenciais ou executar ações maliciosas em seu nome.

##### [Zod]()

O Zod é uma biblioteca de validação de esquema para TypeScript e JavaScript. Ele permite que você defina esquemas de validação de dados de forma declarativa e os use para validar e transformar dados em seu aplicativo.

##### [Dotenv](https://www.npmjs.com/package/dotenv)

O Dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo .env em um aplicativo Node.js. Ele é útil para armazenar informações confidenciais, como chaves de API, senhas e tokens de acesso, fora do código-fonte e acessá-las de forma segura em seu aplicativo.

##### [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

O Jsonwebtoken é uma biblioteca para criar e verificar tokens de autenticação JWT (JSON Web Tokens) em aplicativos Node.js. Ele é amplamente utilizado para autenticar usuários e proteger rotas em aplicativos da web e APIs.

##### [Sqlite](https://www.npmjs.com/package/sqlite)

O Sqlite é um banco de dados SQL embutido que é amplamente utilizado em aplicativos da web e móveis. Ele é leve, rápido e fácil de usar, tornando-o uma escolha popular para aplicativos que precisam de um banco de dados local.

##### [Sqlite3](https://www.npmjs.com/package/sqlite3)

O Sqlite3 é um driver Node.js para o banco de dados SQLite. Ele fornece uma API simples e eficiente para interagir com bancos de dados SQLite em aplicativos Node.js.

##### [Typescript](https://www.typescriptlang.org/)

O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao idioma. Ele é amplamente utilizado em aplicativos Node.js e da web para melhorar a segurança, a legibilidade e a manutenção do código.

##### [Nodemon](https://www.npmjs.com/package/nodemon)

O Nodemon é uma ferramenta que monitora alterações em arquivos em um aplicativo Node.js e reinicia automaticamente o servidor quando as alterações são detectadas. Ele é útil durante o desenvolvimento de aplicativos Node.js, pois permite que você veja as alterações refletidas no servidor em tempo real.

##### [Ts-node](https://www.npmjs.com/package/ts-node)

O Ts-node é um interpretador TypeScript para Node.js que permite executar arquivos TypeScript diretamente no Node.js. Ele é útil durante o desenvolvimento de aplicativos Node.js em TypeScript, pois elimina a necessidade de compilar manualmente os arquivos TypeScript em JavaScript antes de executá-los.

#### Dependências de Tipos

O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional ao idioma. Ele é amplamente utilizado em aplicativos Node.js e da web para melhorar a segurança, a legibilidade e a manutenção do código.

Para instalar as dependências de tipos para o TypeScript, você pode usar o comando npm install --save-dev @types/package-name. Por exemplo, para instalar os tipos para o Express, você pode executar o seguinte comando:

Neste projeto temos as seguintes dependências de tipos:

- @types/express: fornece tipos TypeScript para o Express.
- @types/jsonwebtoken: fornece tipos TypeScript para o Jsonwebtoken.
- @types/node: fornece tipos TypeScript para o Node.js.

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

### Configurar Package.json

O arquivo package.json é um arquivo de metadados para o projeto Node.js. Ele contém informações sobre o projeto, como o nome, a versão, as dependências e os scripts de execução.

#### Configuração dos Scripts para execu..

Os scripts são comandos que podem ser executados no projeto Node.js usando o npm. Eles são definidos no arquivo package.json na seção scripts e podem ser usados para executar tarefas comuns, como iniciar o servidor, compilar o código ou executar testes.

Aqui estão os scripts que usaremos neste projeto:

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts",
  "build": "tsc",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

- start: inicia o servidor Node.js após a compilação do código TypeScript.
- dev: inicia o servidor Node.js em modo de desenvolvimento usando o Nodemon para reiniciar automaticamente o servidor quando as alterações são detectadas.
- build: compila o código TypeScript em JavaScript usando o compilador TypeScript.
- test: um script de espaço reservado para executar testes unitários ou de integração.



## Arquivos Iniciais e Estrutura de Pastas

A estrutura de pastas de um projeto Node.js é uma parte importante da organização do código-fonte e dos recursos do projeto. Uma boa estrutura de pastas pode facilitar a navegação no código, a manutenção do projeto e a colaboração entre os membros da equipe.

Aqui está uma estrutura de pastas comum para um projeto Node.js:

```bash
project
├── dist
├── node_modules
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

Nesta estrutura de pastas, temos as seguintes pastas:

- dist: contém os arquivos JavaScript compilados a partir do código TypeScript.
- node_modules: contém as dependências do projeto instaladas pelo npm.
- src: contém o código-fonte do projeto, incluindo controladores, modelos, rotas, serviços e utilitários.
- controllers: contém os controladores que lidam com a lógica de negócios da aplicação.
- models: contém os modelos de dados que representam as entidades do aplicativo.
- routes: contém os arquivos de rota que definem as rotas da API.
- services: contém os serviços que encapsulam a lógica de negócios da aplicação.
- utils: contém utilitários e funções auxiliares usadas em todo o projeto.
- index.ts: o ponto de entrada do aplicativo Node.js.
- .env: um arquivo de configuração que armazena variáveis de ambiente sensíveis.
- .gitignore: um arquivo que especifica os arquivos e pastas a serem ignorados pelo Git.
- package.json: um arquivo de metadados para o projeto Node.js.
- tsconfig.json: um arquivo de configuração para o compilador TypeScript.
- README.md: um arquivo de documentação para o projeto.

Esta é uma estrutura robusta e organizada para um projeto Node.js. porém para fins didáticos, vamos simplificar a estrutura de pastas para o projeto XYZ:

```bash
project
├── src
│   ├── routes
│   ├── database.ts
│   └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

O único acréscimo que faremos é o arquivo database.ts que será responsável por criar a conexão com o banco de dados SQLite.

### Arquivo de Configuração do Banco de Dados

O arquivo database.ts é responsável por criar a conexão com o banco de dados SQLite. Ele exporta uma função que cria uma nova instância do banco de dados SQLite e retorna a conexão.

```typescript
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connect() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });
}
```

Neste arquivo, importamos os módulos sqlite3 e open do pacote sqlite. Em seguida, exportamos uma função connect que cria uma nova instância do banco de dados SQLite usando a função open.

A função open aceita um objeto de configuração com as seguintes propriedades:

- filename: o caminho para o arquivo de banco de dados SQLite. Neste caso, estamos usando o arquivo database.sqlite na raiz do projeto.
- driver: o driver SQLite a ser usado. Neste caso, estamos usando o driver sqlite3.Database.

### Arquivo de Entrada do Aplicativo

O arquivo index.ts é o ponto de entrada do aplicativo Node.js. Ele é responsável por iniciar o servidor Express, configurar as rotas da API e iniciar o servidor na porta especificada.

```typescript
import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { connect } from './database';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await connect();
  console.log('Database connected');
});
```

Neste arquivo, importamos os módulos express, cors, connect e routes. Em seguida, criamos uma instância do aplicativo Express e definimos a porta do servidor com base na variável de ambiente PORT ou 3000.

Em seguida, configuramos o aplicativo Express para usar o middleware cors e express.json para lidar com solicitações JSON. Em seguida, usamos o middleware routes para configurar as rotas da API.

Por fim, iniciamos o servidor Express na porta especificada e exibimos uma mensagem de log informando que o servidor está em execução. Em seguida, chamamos a função connect para criar a conexão com o banco de dados SQLite e exibimos uma mensagem de log informando que o banco de dados está conectado.

### Arquivo de Rotas da API

O arquivo routes.ts é responsável por definir as rotas da API. Ele exporta um objeto de roteador Express que define as rotas da API e os controladores associados a cada rota.

```typescript
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default router;
```

Neste arquivo, importamos o módulo Router do Express e criamos uma instância de roteador chamada router. Em seguida, definimos uma rota GET na raiz (/) da API que responde com a mensagem 'Hello, World!'.

Por fim, exportamos o objeto de roteador router para que ele possa ser usado no arquivo index.ts.

### Arquivo de Variáveis de Ambiente

O arquivo .env é um arquivo de configuração que armazena variáveis de ambiente sensíveis, como chaves de API, senhas e tokens de acesso. Ele é útil para manter informações confidenciais fora do código-fonte e acessá-las de forma segura em seu aplicativo.

```env
PORT=3000
```

Neste arquivo, definimos a variável de ambiente PORT com o valor 3000. Esta variável é usada no arquivo index.ts para configurar a porta do servidor Express.

## Execução dos scripts package.json

Para executar os scripts definidos no arquivo package.json, você pode usar o comando npm run script-name. Por exemplo, para iniciar o servidor Node.js em modo de desenvolvimento, você pode executar o seguinte comando:
  
```bash
npm run dev
```

Este comando executa o script dev definido no arquivo package.json, que inicia o servidor Node.js em modo de desenvolvimento usando o Nodemon para reiniciar automaticamente o servidor quando as alterações são detectadas.

Para compilar o código TypeScript em JavaScript, você pode executar o seguinte comando:

```bash
npm run build
```

Este comando executa o script build definido no arquivo package.json, que compila o código TypeScript em JavaScript usando o compilador TypeScript.

Para iniciar o servidor Node.js após a compilação do código TypeScript, você pode executar o seguinte comando:

```bash
npm start
```

Este comando executa o script start definido no arquivo package.json, que inicia o servidor Node.js após a compilação do código TypeScript.

# XXXXX

## Criando a rota de usuários

Neste tutorial, vamos criar uma rota de usuários para uma API RESTful. Esta rota permitirá que os clientes criem, leiam, atualizem e excluam usuários em um banco de dados SQLite.

### Criando o modelo de usuário

O primeiro passo é criar o modelo de usuário que representa a entidade de usuário em nosso aplicativo. O modelo de usuário contém os campos de dados que representam um usuário, como nome, e-mail e senha.

Para fins didáticos, vamos criar um modelo de usuário simples com os seguintes campos:

- id: o ID exclusivo do usuário.
- name: o nome do usuário.
- email: o e-mail do usuário.
- password: a senha do usuário.

para manter o exemplo simples vamos cria um rota e diretamente na rota faremos as ações de CRUD, create, read, update e delete, e para tratar os dados de entrada vamos usar a biblioteca Zod para validar os dados de entrada.

### Criando a rota de usuários

Agora que instalamos a biblioteca Zod, podemos criar a rota de usuários em nosso aplicativo Node.js. A rota de usuários será responsável por lidar com as solicitações HTTP relacionadas aos usuários, como criar, ler, atualizar e excluir usuários.

Vamos criar a rota de usuários no arquivo routes.ts:

```typescript
import { Router } from 'express';
import { z } from 'zod';
import { connect } from './database';

const router = Router();

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

router.post('/users', async (req, res) => {
  const { name, email, password } = userSchema.parse(req.body);

  const db = await connect();
  const result = await db.run(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );

  res.json({ id: result.lastID, name, email });
});

router.get('/users', async (req, res) => {
  const db = await connect();
  const users = await db.all('SELECT * FROM users');

  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const db = await connect();
  const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = userSchema.parse(req.body);

  const db = await connect();
  const result = await db.run(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id]
  );

  if (result.changes === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ id, name, email });
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const db = await connect();
  const result = await db.run('DELETE FROM users WHERE id = ?', [id]);

  if (result.changes === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ id });
});

export default router;
```

Neste código, importamos os módulos Router, z e connect. Em seguida, criamos uma instância de roteador chamada router.

Em seguida, definimos um esquema de usuário userSchema usando a biblioteca Zod. O esquema de usuário contém as seguintes propriedades:

- name: uma string que representa o nome do usuário.
- email: uma string que representa o e-mail do usuário.
- password: uma string que representa a senha do usuário.

Em seguida, definimos as rotas da API para criar, ler, atualizar e excluir usuários:

- A rota POST /users é usada para criar um novo usuário no banco de dados. Ela valida os dados de entrada usando o esquema de usuário userSchema e insere os dados na tabela users do banco de dados SQLite.
- A rota GET /users é usada para recuperar todos os usuários da tabela users do banco de dados.
- A rota GET /users/:id é usada para recuperar um usuário específico com base no ID fornecido na URL.
- A rota PUT /users/:id é usada para atualizar um usuário existente com base no ID fornecido na URL. Ela valida os dados de entrada usando o esquema de usuário userSchema e atualiza os dados na tabela users do banco de dados SQLite.
- A rota DELETE /users/:id é usada para excluir um usuário existente com base no ID fornecido na URL.

Por fim, exportamos o objeto de roteador router para que ele possa ser usado no arquivo index.ts.

### Criando a rota de autenticação

Além da rota de usuários, vamos criar uma rota de autenticação para autenticar usuários em nosso aplicativo Node.js. A rota de autenticação permitirá que os usuários façam login no aplicativo usando um e-mail e uma senha.

Para manter o exemplo simples, vamos criar uma rota de autenticação que valida o e-mail e a senha do usuário e gera um token de autenticação JWT (JSON Web Token) se as credenciais forem válidas.

### Criando a rota de autenticação

Agora que instalamos a biblioteca Jsonwebtoken, podemos criar a rota de autenticação em nosso aplicativo Node.js. A rota de autenticação será responsável por autenticar os usuários e gerar um token de autenticação JWT se as credenciais forem válidas.

Vamos criar a rota de autenticação no arquivo routes.ts:

```typescript
import { Router } from 'express';
import { z } from 'zod';
import { connect } from './database';
import jwt from 'jsonwebtoken';

const router = Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

router.post('/login', async (req, res) => {
  const { email, password } = loginSchema.parse(req.body);

  const db = await connect();
  const user = await db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1h',
  });

  res.json({ token });
});

export default router;
```

Neste código, importamos os módulos Router, z, connect e jwt. Em seguida, criamos uma instância de roteador chamada router.

Em seguida, definimos um esquema de login loginSchema usando a biblioteca Zod. O esquema de login contém as seguintes propriedades:

- email: uma string que representa o e-mail do usuário.
- password: uma string que representa a senha do usuário.

Em seguida, definimos a rota POST /login para autenticar os usuários. A rota de autenticação valida os dados de entrada usando o esquema de login loginSchema e verifica se o e-mail e a senha correspondem a um usuário existente na tabela users do banco de dados SQLite.

Se as credenciais forem válidas, a rota de autenticação gera um token de autenticação JWT usando a função jwt.sign. O token de autenticação contém o ID e o e-mail do usuário e expira em 1 hora.

Por fim, exportamos o objeto de roteador router para que ele possa ser usado no arquivo index.ts.

### Criando middleware de autenticação

Além da rota de autenticação, vamos criar um middleware de autenticação para proteger as rotas da API que requerem autenticação. O middleware de autenticação verifica se o token de autenticação JWT é válido e decodifica as informações do usuário contidas no token.

Para criar o middleware de autenticação, vamos criar um arquivo auth.ts:

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = decoded;
    next();
  });
}
```

Neste código, importamos os módulos Request, Response e NextFunction do Express e jwt. Em seguida, exportamos uma função authenticate que atua como um middleware de autenticação.

A função authenticate verifica se o token de autenticação JWT é válido e decodifica as informações do usuário contidas no token. Se o token for válido, a função adiciona as informações do usuário ao objeto de solicitação req e chama a função next para continuar o fluxo de solicitação.

### Protegendo rotas com middleware de autenticação

Agora que criamos o middleware de autenticação, podemos proteger as rotas da API que requerem autenticação. Para proteger uma rota com o middleware de autenticação, basta adicionar o middleware de autenticação à pilha de middleware da rota.

Vamos proteger a rota GET /users usando o middleware de autenticação:

```typescript
import { Router } from 'express';
import { z } from 'zod';
import { connect } from './database';
import jwt from 'jsonwebtoken';
import { authenticate } from './auth';

const router = Router();

router.get('/users', authenticate, async (req, res) => {
  const db = await connect();
  const users = await db.all('SELECT * FROM users');

  res.json(users);
});

export default router;
```

Neste código, importamos o middleware de autenticação authenticate do arquivo auth.ts. Em seguida, protegemos a rota GET /users adicionando o middleware de autenticação authenticate à pilha de middleware da rota.

Agora, a rota GET /users requer autenticação e só pode ser acessada por usuários autenticados com um token de autenticação JWT válido.

## Conclusão

Neste tutorial, você aprendeu a desenvolver uma API RESTful com Node.js e TypeScript. Você criou rotas para usuários e autenticação, validou os dados de entrada usando a biblioteca Zod, gerou tokens de autenticação JWT usando a biblioteca Jsonwebtoken e protegeu rotas com um middleware de autenticação.

O Node.js e o TypeScript são uma combinação poderosa para o desenvolvimento de aplicativos da web e APIs. O TypeScript adiciona tipagem estática opcional ao JavaScript, melhorando a segurança, a legibilidade e a manutenção do código. O Node.js é um ambiente de execução JavaScript baseado no motor V8 do Chrome, amplamente utilizado para criar aplicativos da web e APIs escaláveis e de alto desempenho.

Espero que este tutorial tenha sido útil e que você tenha aprendido a desenvolver uma API RESTful com Node.js e TypeScript. Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para deixar um comentário abaixo.

Obrigado por ler e boa sorte em seus projetos de desenvolvimento de software!
