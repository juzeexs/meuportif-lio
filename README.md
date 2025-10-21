# Portfólio Pessoal - José Vítor Pinto (juzeexs)

Este é o código-fonte do meu portfólio pessoal, desenvolvido para demonstrar minhas habilidades em desenvolvimento Front-End e apresentar meus projetos. O design é focado em modernidade, responsividade e interatividade, utilizando tecnologias web padrão e a biblioteca Bootstrap para um layout consistente.

## Visão Geral

O portfólio é estruturado em seções claras:
* **Início:** Apresentação com efeito de digitação animada.
* **Sobre Mim:** Descrição da minha jornada e paixão por Front-End.
* **Habilidades:** Ícones das principais tecnologias que domino.
* **Projetos:** Cartões interativos para visualizar e acessar o código dos projetos.
* **Contato:** Informações e links sociais para contato.

### Funcionalidades de Destaque
* **Modo Claro/Escuro:** Alternância de tema com persistência via `localStorage`.
* **Temas de Cores:** Possibilidade de mudar a cor de destaque (Mint, Azul, Rosa) com persistência.
* **Animações:** Utilização da biblioteca AOS (Animate On Scroll) para transições suaves.
* **Efeito de Digitação:** Animação no cabeçalho (hero) para o título principal.
* **Responsividade:** Layout adaptável a diferentes tamanhos de tela (mobile-first).

---

## Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Marcação** | HTML5 |
| **Estilização** | CSS3 (com Variáveis CSS) |
| **Framework CSS** | Bootstrap 5.3 |
| **Lógica** | JavaScript (ES6+) |
| **Animações** | AOS (Animate On Scroll) |
| **Ícones** | Font Awesome 6.5.1 |

---

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1.  `index.html`: A estrutura principal do portfólio.
2.  `style.css`: Toda a estilização, incluindo variáveis CSS para gerenciamento de temas e cores.
3.  `script.js`: Responsável pelas interações dinâmicas, como o efeito de digitação, a lógica de temas (claro/escuro e cores de destaque) e o botão "Scroll to Top".

### 1. `index.html`

Contém a estrutura semântica do portfólio. É notável a inclusão de:
* **Navbar Fixa:** Com links de navegação, alternadores de tema (`#theme-toggle`) e cor (`#color-switcher-btn`).
* **Variáveis de Título:** Classes como `welcome-text`, `name-text` e `typing-container` para acionar as animações de entrada e o efeito de digitação via JavaScript.
* **Estrutura de Cards:** Utilização da classe `custom-card` e `projeto-card` para padronizar o visual das seções e projetos.

### 2. `style.css`

Define a identidade visual e as animações.
* **Variáveis CSS (`:root`):** Define as cores para o modo escuro (`--cor-primaria`, `--cor-destaque`, etc.).
* **Temas e Modo Claro:** Implementa classes como `.light-mode`, `.theme-blue`, `.theme-pink` para redefinir as variáveis CSS, permitindo a mudança de tema e cor dinamicamente.
* **`@keyframes`:** Define animações customizadas como `blink` (cursor do efeito de digitação) e `drawLine` (animação das linhas dos títulos).
* **Estilização de Componentes:** Estilos customizados para `navbar-custom`, `theme-btn`, `perfil-img`, `projeto-card`, entre outros.

### 3. `script.js`

O cérebro das interações do portfólio.
* **AOS.init():** Inicializa a biblioteca AOS para as animações de rolagem.
* **Alternância de Tema (1):** Gerencia o clique no `#theme-toggle`, aplicando ou removendo a classe `light-mode` e persistindo a escolha no `localStorage`.
* **Troca de Cor (2):** Gerencia a seleção de cores de destaque, aplicando as classes `.theme-blue`, `.theme-pink` ou `.theme-mint` no `body` e persistindo no `localStorage`.
* **Efeito de Digitação (5):** Implementa a função `startTypingEffect` para animar o texto do cabeçalho, simulando a digitação e a exclusão das frases ("Desenvolvedor Front-End.", "Web Designer.", etc.).
* **Scroll To Top (4):** Controla a exibição e o comportamento do botão `#scroll-to-top`.

---
