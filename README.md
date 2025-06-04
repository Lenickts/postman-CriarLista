# 📝 Lista de Tarefas (To-do List)

Este é um projeto simples de **Lista de Tarefas** (To-do List) desenvolvido com **HTML, CSS e JavaScript**, integrando com a API do [crudcrud.com](https://crudcrud.com/) para simular um backend.

## 🚀 Funcionalidades

- ✅ Adicionar nova tarefa
- ❌ Remover tarefa individual
- 🔄 Integração com API REST (GET, POST, DELETE)
- 🔁 Recarrega a lista automaticamente ao abrir a página

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (opcional, para estilização)
- JavaScript (ES6+)
- `fetch()` para chamadas à API
- API REST gratuita: [crudcrud.com](https://crudcrud.com/)

## 📁 Estrutura

- `index.html` — Estrutura da interface
- `script.js` — Lógica de integração com a API e manipulação da DOM
- `style.css` — (Opcional) Estilo da aplicação

## 📌 Como usar

1. Obtenha sua URL da API em: https://crudcrud.com/
2. Substitua o link da API no script (`script.js`) pelo seu:
   ```js
   fetch("https://crudcrud.com/api/SEU_ENDPOINT_AQUI/tarefas")
