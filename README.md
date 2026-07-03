# 🚀 Cypress Automation - ServeRest

Projeto de automação de testes desenvolvido utilizando **Cypress** e **JavaScript** para validar funcionalidades da aplicação **ServeRest**, contemplando testes **E2E (Frontend)** e **API**.

O objetivo deste projeto é demonstrar boas práticas de automação, organização de código, reutilização e independência dos cenários.

---

# 📌 Tecnologias utilizadas

- Cypress 15
- JavaScript (ES6+)
- Node.js
- Page Object Model (POM)
- Mochawesome Reporter
- GitHub Actions (CI)

---

# 📂 Estrutura do projeto

```text
serverest-cypress-tests
│
├── cypress
│   ├── e2e
│   │   ├── api
│   │   │   ├── login.cy.js
│   │   │   ├── produtos.cy.js
│   │   │   └── usuarios.cy.js
│   │   │
│   │   └── frontend
│   │       ├── cadastro-produto.cy.js
│   │       ├── login-negativo.cy.js
│   │       └── login-sucesso.cy.js
│   │
│   ├── factories
│   │   ├── productFactory.js
│   │   └── userFactory.js
│   │
│   ├── pages
│   │   ├── LoginPage.js
│   │   └── ProdutoPage.js
│   │
│   ├── selectors
│   │   ├── loginSelectors.js
│   │   └── produtoSelectors.js
│   │
│   ├── services
│   │   ├── LoginService.js
│   │   ├── ProdutoService.js
│   │   └── UsuarioService.js
│   │
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   └── fixtures
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# 🎯 Cenários automatizados

## API

### ✅ Cadastro de usuário

Valida o cadastro de um novo usuário.

**Validações**

- Status Code 201
- Mensagem de sucesso
- Retorno do ID do usuário

---

### ✅ Cadastro com e-mail duplicado

Valida que a API impede o cadastro de usuários com e-mails já existentes.

**Validações**

- Status Code 400
- Mensagem de e-mail já utilizado

---

### ✅ Login

Valida autenticação de usuário.

**Validações**

- Status Code 200
- Token JWT retornado

---

### ✅ Cadastro de produto

Valida cadastro de produto utilizando usuário administrador.

**Validações**

- Status Code 201
- Produto criado com sucesso

---

# Frontend

### ✅ Login com sucesso

Fluxo:

- Cria usuário via API
- Efetua login pela interface
- Valida acesso à Home

---

### ✅ Login inválido

Fluxo:

- Acessa tela de login
- Informa credenciais inválidas
- Valida mensagem de erro

---

### ✅ Cadastro de produto

Fluxo:

- Cria usuário administrador via API
- Realiza login pela interface
- Cadastra produto
- Valida produto na listagem

---

# 🏗 Arquitetura

O projeto foi desenvolvido utilizando algumas práticas comuns em projetos de automação:

- Page Object Model (POM)
- Service Layer
- Factories para geração de dados
- Selectors centralizados
- Separação entre testes E2E e API
- Massa de dados dinâmica
- Independência entre cenários

---

# ▶️ Instalação

Clone o projeto

```bash
git clone https://github.com/SEU-USUARIO/serverest-cypress-tests.git
```

Entre na pasta

```bash
cd serverest-cypress-tests
```

Instale as dependências

```bash
npm install
```

---

# ▶️ Executando os testes

Abrir o Cypress

```bash
npm run cy:open
```

Executar todos os testes

```bash
npm run cy:run
```

Executar somente API

```bash
npm run cy:run:api
```

Executar somente Frontend

```bash
npm run cy:run:frontend
```

---

# 📊 Relatórios

O projeto utiliza **Mochawesome Reporter**.

Após a execução dos testes será gerado um relatório HTML.

---

# 🔄 Integração Contínua

O projeto possui um workflow utilizando **GitHub Actions** para execução automática dos testes.

Fluxo:

```
Push

↓

Install

↓

Run Cypress

↓

Generate Report
```

---

# 💡 Estratégia de Automação

Para tornar os cenários independentes e mais rápidos, a criação da massa de dados é realizada via API sempre que possível.

Com isso:

- não existe dependência entre testes;
- os cenários podem ser executados individualmente;
- evita conflitos de massa;
- reduz tempo de execução.

---

# 📈 Melhorias Futuras

- Docker
- Geração automática de massa de testes
- Integração com Allure Reports
- Execução paralela
- Pipeline com GitHub Actions
- Testes Cross Browser

---

# 👨‍💻 Autor

Gabriel Paciullo

Senior QA Automation Engineer

LinkedIn:
https://www.linkedin.com/in/gabriel-paciullo/

GitHub:
https://github.com/gpaciullo