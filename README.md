

---

# <h1 align="center"> FRONT-END </h1>

### Tecnologias

Tecnologias e ferramentas utilizadas no projeto: `React, TypeScript, Material-UI, Axios, Vite`

## Como Executar a aplicação
```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
$ cd front

# Instale as dependências do projeto
$ npm install

# Inicie o Projeto
$ npm run dev

# O projeto será executado em: http://localhost:5173
```

## Funcionalidades da aplicação

<div align="center">
  
|                                                                    Tipo | Função                              | Descrição                                                                 |
| ----------------------------------------------------------------------: | :---------------------------------- | :----------------------------------------------------------------------- |
|                                                                    <hr> | <hr>                               | **Gerenciamento de Macronutrientes**                                      |
|   [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | `/addMeal`                         | Adicionar refeições e atualizar macronutrientes conforme o banco de dados |
|   [![](https://img.shields.io/badge/GET-4682B4?style=for-the-badge)]()  | `/getMacros`                       | Recuperar dados de macronutrientes da API com Axios                        |

</div>

## Estruturação das pastas

| Pasta                    | Definição                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| 📁 src/                   | Arquivos com o código fonte do projeto                                                     |
| 📁 src/components/        | Componentes reutilizáveis para diferentes partes da aplicação, como `MacroProgressBar`      |
| 📁 src/pages/             | Arquivos responsáveis pelas páginas principais do projeto                                  |
| 📁 src/services/          | Serviços para realizar requisições HTTP, como a conexão com a API                          |
| 📁 src/styles/            | Arquivos relacionados à estilização global da aplicação                                    |
| 📁 src/utils/             | Funções utilitárias que podem ser reutilizadas em várias partes do projeto                 |
| 📄 .gitignore             | Arquivo com a retenção de arquivos pelo serviço de git                                      |
| 📄 vite.config.ts         | Arquivo usado para configurar o Vite para desenvolvimento com React e TypeScript           |
| 📄 tsconfig.json          | Arquivo usado para configurar o TypeScript                                                 |
| 📄 package.json           | Arquivo para gerenciar as dependências do projeto e compor scripts de terminal             |

---

