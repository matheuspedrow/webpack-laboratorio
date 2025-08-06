import "./style.css";

console.log("JavaScript carregado!");

// ===== BLOCO 1: VARIÁVEIS E TIPOS DE DADOS =====
// Edite as variáveis abaixo e veja as mudanças no console
let nome = "Seu Nome";
let idade = 25;
let ehEstudante = true;
let hobbies = ["programar", "ler", "música"];

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("É estudante?", ehEstudante);
console.log("Hobbies:", hobbies);

// ===== BLOCO 2: FUNÇÕES =====
// Crie suas próprias funções aqui
function saudacao() {
    return `Olá, ${nome}! Bem-vindo ao curso!`;
}

function calcularIdadeEmDias() {
    return idade * 365;
}

// Teste as funções
console.log(saudacao());
console.log(`Você já viveu aproximadamente ${calcularIdadeEmDias()} dias!`);

// ===== BLOCO 3: MANIPULAÇÃO DO DOM =====
// Adicione elementos ao HTML dinamicamente
window.criarElemento = function() {
    const novoElemento = document.createElement('div');
    novoElemento.className = 'elemento-criado';
    novoElemento.innerHTML = `
        <h3>Elemento criado por JavaScript!</h3>
        <p>Data: ${new Date().toLocaleDateString()}</p>
        <p>Hora: ${new Date().toLocaleTimeString()}</p>
        <button onclick="removerElemento(this)" class="btn-remover">Remover</button>
    `;
    document.body.appendChild(novoElemento);
    console.log('Elemento criado com sucesso!');
}

window.removerElemento = function(botao) {
    botao.parentElement.remove();
    console.log('Elemento removido!');
}

// ===== BLOCO 5: LOCAL STORAGE =====
let contador = 0;

window.incrementarContador = function() {
    contador++;
    const contadorDisplay = document.getElementById('contador-display');
    if (contadorDisplay) {
        contadorDisplay.textContent = contador;
    }
    localStorage.setItem('contador', contador);
    console.log('Contador incrementado para:', contador);
}

window.salvarDados = function() {
    const dados = {
        nome: nome,
        idade: idade,
        contador: contador,
        ultimaVisita: new Date().toISOString()
    };
    localStorage.setItem('dadosUsuario', JSON.stringify(dados));
    alert('Dados salvos no localStorage!');
    console.log('Dados salvos:', dados);
}

// ===== BLOCO 6: ARRAYS E MÉTODOS =====
// Experimente com arrays
const numeros = [1, 2, 3, 4, 5];
const frutas = ['maçã', 'banana', 'laranja'];

function manipularArrays() {
    // Adicionar elemento
    frutas.push('uva');
    console.log('Frutas após push:', frutas);
    
    // Filtrar números pares
    const pares = numeros.filter(num => num % 2 === 0);
    console.log('Números pares:', pares);
    
    // Mapear array
    const dobros = numeros.map(num => num * 2);
    console.log('Dobros:', dobros);
}

// ===== BLOCO 7: MUDANÇA DE CORES =====
let cores = ['#667eea', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
let indiceCor = 0;

window.mudarCor = function() {
    const body = document.body;
    indiceCor = (indiceCor + 1) % cores.length;
    body.style.background = `linear-gradient(135deg, ${cores[indiceCor]} 0%, ${cores[(indiceCor + 1) % cores.length]} 100%)`;
    console.log('Cor alterada para:', cores[indiceCor]);
}

// ===== BLOCO 4: EVENTOS =====
// Adicione event listeners quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada!");
    
    // Cria display para contador primeiro
    const contadorDisplay = document.createElement('div');
    contadorDisplay.id = 'contador-display';
    contadorDisplay.className = 'contador-display';
    contadorDisplay.textContent = '0';
    document.body.appendChild(contadorDisplay);
    
    // Cria botões interativos
    const botoesContainer = document.createElement('div');
    botoesContainer.className = 'botoes-container';
    botoesContainer.innerHTML = `
        <button onclick="criarElemento()" class="btn btn-primary">Criar Elemento</button>
        <button onclick="mudarCor()" class="btn btn-secondary">Mudar Cor</button>
        <button onclick="incrementarContador()" class="btn btn-success">Contador</button>
        <button onclick="salvarDados()" class="btn btn-info">Salvar Dados</button>
    `;
    document.body.appendChild(botoesContainer);
    
    // Carrega contador salvo
    const contadorSalvo = localStorage.getItem('contador');
    if (contadorSalvo) {
        contador = parseInt(contadorSalvo);
        contadorDisplay.textContent = contador;
    }
    
    // Testa manipulação de arrays
    manipularArrays();
});

// ===== INICIALIZAÇÃO =====
// Carrega dados salvos
window.addEventListener('load', function() {
    const dadosSalvos = localStorage.getItem('dadosUsuario');
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        console.log('Dados carregados:', dados);
    }
});

// Mensagem de boas-vindas
alert("Bem-vindos ao treino de HTML/CSS/JS! 🚀\n\nEdite este arquivo e veja as mudanças em tempo real!"); 