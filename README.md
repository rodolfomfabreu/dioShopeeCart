## SHOPEE CART (Node.js + JavaScript ES6)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/ES6_Modules-000000?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Async_Await-000000?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Cart_System-FF6B35?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/CLI_Application-000000?style=for-the-badge"/>
</p>

<div align="center">
  <b>🇧🇷 Português | <a href="#english-version">🇺🇸 English below</a></b>
</div>

---

## 📑 Sumário | Table of Contents
- [Sobre o Projeto | About](#sobre-o-projeto--about)
- [Funcionalidades | Features](#funcionalidades--features)
- [Tecnologias | Technologies](#tecnologias--technologies)
- [Estrutura | Structure](#estrutura--structure)
- [Configuração | Configuration](#configuração--configuration)
- [Instalação e Execução | Setup & Run](#instalação-e-execução--setup--run)
- [Funcionalidades do Carrinho | Cart Features](#funcionalidades-do-carrinho--cart-features)
- [Autor | Author](#autor--author)

---

## Sobre o Projeto | About

**PT-BR:**
> Shopee Cart é uma aplicação de linha de comando (CLI) desenvolvida em Node.js com JavaScript ES6. Ela simula um sistema de carrinho de compras com funcionalidades para adicionar itens, calcular totais, remover produtos e exibir o carrinho. Ideal para estudos de programação assíncrona, módulos ES6 e manipulação de arrays em JavaScript.

**EN:**
> Shopee Cart is a command-line interface (CLI) application built with Node.js and JavaScript ES6. It simulates a shopping cart system with features to add items, calculate totals, remove products, and display the cart. Great for learning asynchronous programming, ES6 modules, and array manipulation in JavaScript.

---

## 🚀 Funcionalidades | Features

**PT-BR:**
- **Criar itens**: Função para criar produtos com nome, preço e quantidade
- **Adicionar ao carrinho**: Adicionar itens ao carrinho de compras
- **Exibir carrinho**: Mostrar todos os itens do carrinho com detalhes
- **Calcular total**: Calcular o valor total dos itens no carrinho
- **Remover por nome**: Remover item específico pelo nome
- **Remover por índice**: Remover item pela posição no carrinho
- **Programação assíncrona**: Uso de async/await para operações assíncronas
- **Módulos ES6**: Estrutura modular com import/export

**EN:**
- **Create items**: Function to create products with name, price, and quantity
- **Add to cart**: Add items to the shopping cart
- **Display cart**: Show all cart items with details
- **Calculate total**: Calculate the total value of items in the cart
- **Remove by name**: Remove specific item by name
- **Remove by index**: Remove item by position in the cart
- **Asynchronous programming**: Use of async/await for asynchronous operations
- **ES6 Modules**: Modular structure with import/export

---

## 🚀 Tecnologias | Technologies

**PT-BR:**
- **Node.js 18+**: Runtime JavaScript
- **JavaScript ES6+**: Linguagem de programação moderna
- **ES6 Modules**: Sistema de módulos nativo
- **Async/Await**: Programação assíncrona
- **Arrow Functions**: Sintaxe moderna de funções
- **Array Methods**: Métodos de manipulação de arrays (reduce, forEach, findIndex, splice)

**EN:**
- **Node.js 18+**: JavaScript runtime
- **JavaScript ES6+**: Modern programming language
- **ES6 Modules**: Native module system
- **Async/Await**: Asynchronous programming
- **Arrow Functions**: Modern function syntax
- **Array Methods**: Array manipulation methods (reduce, forEach, findIndex, splice)

---

## 🗂️ Estrutura | Structure
```
dio-shopee-cart/
├── src/
│   ├── index.js
│   └── services/
│       ├── cart.js
│       └── item.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Configuração | Configuration

**PT-BR:**
- Não requer configuração adicional. O projeto usa módulos ES6 nativos do Node.js.

**EN:**
- No additional configuration required. The project uses native ES6 modules from Node.js.

---

## ⚙️ Instalação e Execução | Setup & Run

**PT-BR:**
1. **Pré-requisitos:** Node.js 18+ e npm
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute a aplicação:**
   ```bash
   node src/index.js
   ```

**EN:**
1. **Prerequisites:** Node.js 18+ and npm
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run start
   ```

---

## 🛒 Funcionalidades do Carrinho | Cart Features

**PT-BR:**

### Operações Disponíveis:
- **Criar Item**: `createItem(name, price, quantity)` - Cria um novo item com nome, preço e quantidade
- **Adicionar ao Carrinho**: `addItem(cart, item)` - Adiciona um item ao carrinho
- **Exibir Carrinho**: `displayCart(cart)` - Mostra todos os itens do carrinho
- **Calcular Total**: `calculateTotal(cart)` - Calcula o valor total do carrinho
- **Remover por Nome**: `deleteItem(cart, name)` - Remove item pelo nome
- **Remover por Índice**: `deleteItemByIndex(cart, index)` - Remove item pela posição

### Exemplo de Uso:
```javascript
// Criar itens
const item1 = await createItem("Item 1", 10, 2);
const item2 = await createItem("Item 2", 39.99, 3);

// Adicionar ao carrinho
cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

// Exibir e calcular total
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);
```

**EN:**

### Available Operations:
- **Create Item**: `createItem(name, price, quantity)` - Creates a new item with name, price and quantity
- **Add to Cart**: `addItem(cart, item)` - Adds an item to the cart
- **Display Cart**: `displayCart(cart)` - Shows all cart items
- **Calculate Total**: `calculateTotal(cart)` - Calculates the total cart value
- **Remove by Name**: `deleteItem(cart, name)` - Removes item by name
- **Remove by Index**: `deleteItemByIndex(cart, index)` - Removes item by position

### Usage Example:
```javascript
// Create items
const item1 = await createItem("Item 1", 10, 2);
const item2 = await createItem("Item 2", 39.99, 3);

// Add to cart
cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

// Display and calculate total
await cartService.displayCart(cart);
await cartService.calculateTotal(cart);
```

---

## 👨‍💻 Autor | Author

**PT-BR:**

<div align="center">

**Rodolfo M. F. Abreu**  
Desenvolvedor de software apaixonado por tecnologia, aprendizado contínuo e boas práticas de programação. Sempre em busca de novos desafios e oportunidades para colaborar em projetos inovadores.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Sinta-se à vontade para entrar em contato para dúvidas, sugestões ou colaborações!

</div>

**EN:**

<div align="center">

**Rodolfo M. F. Abreu**  
Software developer passionate about technology, continuous learning, and best programming practices. Always looking for new challenges and opportunities to collaborate on innovative projects.

[![GitHub](https://img.shields.io/badge/GitHub-rodolfomfabreu-black?style=for-the-badge&logo=github)](https://github.com/salamandery)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rodolfo%20Abreu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rodolfo-marques-ferreira-de-abreu/)

Feel free to get in touch for questions, suggestions, or collaborations!

</div>

---

<div align="center">
  <b>Feito com 💙 para estudos de Node.js, JavaScript ES6, módulos e programação assíncrona.<br/>
  Made with 💙 for Node.js, JavaScript ES6, modules and asynchronous programming studies.</b>
</div>

---

<div align="center" id="english-version">
  <b>🇺🇸 English version above | <a href="#top">🇧🇷 Versão em português acima</a></b>
</div>