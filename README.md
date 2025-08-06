# 🚀 Laboratório de Programação Web

Um ambiente interativo e moderno para aprender **HTML**, **CSS** e **JavaScript** com Webpack, desenvolvido especialmente para estudantes e iniciantes em programação web.

## 📋 Sobre o Projeto

Este laboratório oferece uma experiência hands-on para aprender desenvolvimento web através de blocos de código preparados, exemplos práticos e funcionalidades interativas. Os alunos podem editar o código e ver as mudanças em tempo real, facilitando o aprendizado.

## ✨ Funcionalidades

### 🎯 **Blocos de Aprendizado Preparados:**
- **Variáveis e Tipos de Dados** - Experimente com diferentes tipos de dados
- **Funções** - Crie e teste suas próprias funções
- **Manipulação do DOM** - Adicione e remova elementos dinamicamente
- **Eventos** - Interaja com botões e elementos da página
- **LocalStorage** - Salve e carregue dados no navegador
- **Arrays e Métodos** - Explore métodos como filter, map, push
- **Mudança de Cores** - Altere o visual da página dinamicamente

### 🎨 **Interface Moderna:**
- Design responsivo e atrativo
- Animações CSS suaves
- Gradientes e efeitos visuais
- Layout adaptável para mobile
- Glassmorphism effects

### 🔧 **Ferramentas de Desenvolvimento:**
- **Hot Reload** - Mudanças automáticas no navegador
- **Webpack Dev Server** - Servidor de desenvolvimento
- **Console Logs** - Debug e acompanhamento em tempo real
- **LocalStorage** - Persistência de dados

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos e responsivos
- **JavaScript ES6+** - Lógica interativa
- **Webpack 5** - Bundler e dev server
- **Node.js** - Ambiente de execução

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js (versão LTS recomendada)
- npm ou yarn

### Passos para instalação:

1. **Clone o repositório:**
```bash
git clone https://github.com/SEU_USUARIO/webpack-laboratorio.git
cd webpack-laboratorio
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 🎓 Como Usar

### Para Estudantes:

1. **Abra o projeto** no seu editor de código favorito
2. **Edite os arquivos:**
   - `src/index.js` - Lógica JavaScript
   - `src/style.css` - Estilos CSS
3. **Veja as mudanças** automaticamente no navegador
4. **Abra o Console** (F12) para ver logs e debug
5. **Experimente** com os blocos de código preparados

### Exercícios Sugeridos:

#### 1. **Variáveis e Dados** (BLOCO 1)
```javascript
// Modifique estas variáveis
let nome = "Seu Nome";
let idade = 25;
let hobbies = ["programar", "ler", "música"];
```

#### 2. **Funções** (BLOCO 2)
```javascript
// Crie suas próprias funções
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
```

#### 3. **DOM e Eventos** (BLOCO 3 e 4)
- Clique nos botões interativos
- Modifique a função `criarElemento()`
- Adicione novos tipos de elementos

#### 4. **Arrays e Métodos** (BLOCO 6)
```javascript
// Experimente com arrays
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
```

#### 5. **CSS e Estilos**
- Mude as cores dos botões
- Adicione novas animações
- Modifique o layout responsivo

## 📁 Estrutura do Projeto

```
webpack-laboratorio/
│
├── dist/                 # Arquivos de saída
│   └── index.html       # Template HTML
│
├── src/                 # Código fonte
│   ├── index.js        # JavaScript principal
│   └── style.css       # Estilos CSS
│
├── package.json         # Dependências e scripts
├── webpack.config.js    # Configuração do Webpack
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build
```

## 🎯 Objetivos de Aprendizado

- ✅ Compreender conceitos básicos de JavaScript
- ✅ Manipular o DOM dinamicamente
- ✅ Trabalhar com eventos e interações
- ✅ Usar localStorage para persistência
- ✅ Aplicar estilos CSS modernos
- ✅ Entender o funcionamento do Webpack
- ✅ Desenvolver interfaces responsivas

## 💡 Dicas para Professores

- Use o **Console do navegador** para demonstrar logs
- Incentive os alunos a **experimentar** e **errar**
- Sugira **modificações** nos blocos de código
- Demonstre o **Hot Reload** em tempo real
- Use os **exercícios sugeridos** como ponto de partida

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- Email: seu-email@exemplo.com

## 🙏 Agradecimentos

- Comunidade Webpack
- MDN Web Docs
- Stack Overflow
- Todos os estudantes que testaram e contribuíram

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

---

**Divirta-se programando! 🎓✨** 