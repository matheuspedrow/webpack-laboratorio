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

// ===== SISTEMA DE ABAS =====
window.mostrarAba = function(aba) {
    // Esconde todas as abas
    const abas = document.querySelectorAll('.tab-content');
    abas.forEach(a => a.classList.remove('active'));
    
    // Remove classe active de todos os botões
    const botoes = document.querySelectorAll('.tab-btn');
    botoes.forEach(b => b.classList.remove('active'));
    
    // Mostra a aba selecionada
    document.getElementById(`aba-${aba}`).classList.add('active');
    
    // Adiciona classe active ao botão clicado
    event.target.classList.add('active');
}

// ===== FUNÇÕES DE TESTE DOS EXERCÍCIOS INICIAIS =====
window.testarVariaveis = function() {
    alert(`Testando variáveis:\nNome: ${nome}\nIdade: ${idade}\nHobbies: ${hobbies.join(', ')}`);
    console.log('Variáveis testadas:', { nome, idade, ehEstudante, hobbies });
}

window.testarFuncoes = function() {
    alert(`Testando funções:\nSaudação: ${saudacao()}\nIdade em dias: ${calcularIdadeEmDias()}`);
    console.log('Funções testadas com sucesso!');
}

window.testarDOM = function() {
    alert('Testando DOM - Verifique se os botões funcionam corretamente!');
    console.log('DOM testado - botões interativos funcionando');
}

window.testarArrays = function() {
    alert(`Testando arrays:\nNúmeros: ${numeros.join(', ')}\nFrutas: ${frutas.join(', ')}`);
    console.log('Arrays testados:', { numeros, frutas });
}

window.testarCSS = function() {
    alert('Testando CSS - Verifique se as animações e estilos estão funcionando!');
    console.log('CSS testado - estilos aplicados corretamente');
}

window.testarLocalStorage = function() {
    const dadosSalvos = localStorage.getItem('dadosUsuario');
    if (dadosSalvos) {
        alert('LocalStorage funcionando! Dados salvos encontrados.');
    } else {
        alert('LocalStorage funcionando! Nenhum dado salvo ainda.');
    }
    console.log('LocalStorage testado');
}

// ===== FUNÇÕES DOS EXERCÍCIOS AVANÇADOS =====
window.criarFormularioValidacao = function() {
    const formulario = document.createElement('div');
    formulario.className = 'formulario-validacao';
    formulario.innerHTML = `
        <h3>Formulário de Validação</h3>
        <form onsubmit="validarFormulario(event)">
            <input type="text" id="nome" placeholder="Nome (mínimo 3 caracteres)" required>
            <input type="email" id="email" placeholder="Email válido" required>
            <input type="password" id="senha" placeholder="Senha (mínimo 8 caracteres)" required>
            <input type="tel" id="telefone" placeholder="Telefone (XX) XXXXX-XXXX" required>
            <button type="submit">Validar</button>
        </form>
        <button onclick="this.parentElement.remove()" class="btn-remover">Fechar</button>
    `;
    document.body.appendChild(formulario);
}

window.validarFormulario = function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const telefone = document.getElementById('telefone').value;
    
    let erros = [];
    
    if (nome.length < 3) erros.push('Nome deve ter pelo menos 3 caracteres');
    if (!email.includes('@')) erros.push('Email inválido');
    if (senha.length < 8) erros.push('Senha deve ter pelo menos 8 caracteres');
    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) erros.push('Telefone deve estar no formato (XX) XXXXX-XXXX');
    
    if (erros.length > 0) {
        alert('Erros encontrados:\n' + erros.join('\n'));
    } else {
        alert('Formulário válido! Todos os campos estão corretos.');
    }
}

window.testarDatas = function() {
    const hoje = new Date();
    const nascimento = new Date('1995-01-01');
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    
    alert(`Testando datas:\nHoje: ${hoje.toLocaleDateString()}\nIdade calculada: ${idade} anos`);
    console.log('Datas testadas:', { hoje, nascimento, idade });
}

window.criarJogos = function() {
    const jogos = document.createElement('div');
    jogos.className = 'jogos-container';
    jogos.innerHTML = `
        <h3>Jogos Interativos</h3>
        <div class="jogo">
            <h4>Jogo da Adivinhação</h4>
            <input type="number" id="palpite" placeholder="Digite um número (1-100)">
            <button onclick="verificarPalpite()">Verificar</button>
            <p id="resultado-jogo"></p>
        </div>
        <div class="jogo">
            <h4>Simulador de Dados</h4>
            <button onclick="rolarDados()">Rolar Dados</button>
            <p id="resultado-dados"></p>
        </div>
        <button onclick="this.parentElement.remove()" class="btn-remover">Fechar</button>
    `;
    document.body.appendChild(jogos);
}

window.verificarPalpite = function() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const resultado = document.getElementById('resultado-jogo');
    
    if (palpite === numeroSecreto) {
        resultado.textContent = 'Parabéns! Você acertou!';
    } else if (palpite < numeroSecreto) {
        resultado.textContent = 'Muito baixo! Tente um número maior.';
    } else {
        resultado.textContent = 'Muito alto! Tente um número menor.';
    }
}

window.rolarDados = function() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    document.getElementById('resultado-dados').textContent = `Você rolou: ${resultado}`;
}

window.testarArraysAvancado = function() {
    const produtos = [
        { nome: 'Notebook', preco: 2500, categoria: 'eletrônicos' },
        { nome: 'Mouse', preco: 50, categoria: 'eletrônicos' },
        { nome: 'Livro', preco: 30, categoria: 'livros' }
    ];
    
    const maisCaro = produtos.reduce((max, produto) => 
        produto.preco > max.preco ? produto : max
    );
    
    alert(`Testando arrays avançados:\nProduto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);
    console.log('Arrays avançados testados:', produtos);
}

window.criarAnimacoes = function() {
    const animacoes = document.createElement('div');
    animacoes.className = 'animacoes-container';
    animacoes.innerHTML = `
        <h3>Animações CSS</h3>
        <div class="elemento-animado" id="elemento-animado">
            Clique para animar!
        </div>
        <button onclick="adicionarAnimacao()">Adicionar Animação</button>
        <button onclick="this.parentElement.remove()" class="btn-remover">Fechar</button>
    `;
    document.body.appendChild(animacoes);
}

window.adicionarAnimacao = function() {
    const elemento = document.getElementById('elemento-animado');
    const animacoes = ['fadeIn', 'slideIn', 'bounce', 'rotate'];
    const animacaoAleatoria = animacoes[Math.floor(Math.random() * animacoes.length)];
    
    elemento.style.animation = `${animacaoAleatoria} 1s ease-in-out`;
    setTimeout(() => {
        elemento.style.animation = '';
    }, 1000);
}

window.criarSistemaNotas = function() {
    const sistema = document.createElement('div');
    sistema.className = 'sistema-notas';
    sistema.innerHTML = `
        <h3>Sistema de Notas</h3>
        <input type="number" id="nota1" placeholder="Nota 1" min="0" max="10" step="0.1">
        <input type="number" id="nota2" placeholder="Nota 2" min="0" max="10" step="0.1">
        <input type="number" id="nota3" placeholder="Nota 3" min="0" max="10" step="0.1">
        <button onclick="calcularMedia()">Calcular Média</button>
        <p id="resultado-media"></p>
        <button onclick="this.parentElement.remove()" class="btn-remover">Fechar</button>
    `;
    document.body.appendChild(sistema);
}

window.calcularMedia = function() {
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    
    const media = (nota1 + nota2 + nota3) / 3;
    const resultado = document.getElementById('resultado-media');
    
    if (media >= 7) {
        resultado.textContent = `Média: ${media.toFixed(1)} - Aprovado!`;
    } else if (media >= 5) {
        resultado.textContent = `Média: ${media.toFixed(1)} - Recuperação`;
    } else {
        resultado.textContent = `Média: ${media.toFixed(1)} - Reprovado`;
    }
}

// ===== FUNÇÕES DOS DESAFIOS =====
window.criarCronometro = function() {
    const cronometro = document.createElement('div');
    cronometro.className = 'cronometro-container';
    cronometro.innerHTML = `
        <h3>Cronômetro</h3>
        <div class="display-cronometro" id="display-cronometro">00:00:00</div>
        <div class="controles-cronometro">
            <button onclick="iniciarCronometro()" id="btn-iniciar">Iniciar</button>
            <button onclick="pausarCronometro()" id="btn-pausar" disabled>Pausar</button>
            <button onclick="zerarCronometro()">Zerar</button>
        </div>
        <button onclick="this.parentElement.remove()" class="btn-remover">Fechar</button>
    `;
    document.body.appendChild(cronometro);
}

let cronometroIntervalo;
let cronometroSegundos = 0;

window.iniciarCronometro = function() {
    document.getElementById('btn-iniciar').disabled = true;
    document.getElementById('btn-pausar').disabled = false;
    
    cronometroIntervalo = setInterval(() => {
        cronometroSegundos++;
        const horas = Math.floor(cronometroSegundos / 3600);
        const minutos = Math.floor((cronometroSegundos % 3600) / 60);
        const segundos = cronometroSegundos % 60;
        
        document.getElementById('display-cronometro').textContent = 
            `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }, 1000);
}

window.pausarCronometro = function() {
    clearInterval(cronometroIntervalo);
    document.getElementById('btn-iniciar').disabled = false;
    document.getElementById('btn-pausar').disabled = true;
}

window.zerarCronometro = function() {
    clearInterval(cronometroIntervalo);
    cronometroSegundos = 0;
    document.getElementById('display-cronometro').textContent = '00:00:00';
    document.getElementById('btn-iniciar').disabled = false;
    document.getElementById('btn-pausar').disabled = true;
}

window.criarListaTarefas = function() {
    const lista = document.createElement('div');
    lista.className = 'lista-tarefas';
    lista.innerHTML = `
        <h3>Lista de Tarefas</h3>
        <div class="adicionar-tarefa">
            <input type="text" id="nova-tarefa" placeholder="Nova tarefa">
            <button onclick="adicionarTarefa()">Adicionar</button>
        </div>
        <ul id="lista-tarefas"></ul>
        <button onclick="this.parentElement.remove()" class="btn-remover">Fechar</button>
    `;
    document.body.appendChild(lista);
    carregarTarefas();
}

window.adicionarTarefa = function() {
    const input = document.getElementById('nova-tarefa');
    const texto = input.value.trim();
    
    if (texto) {
        const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
        tarefas.push({ id: Date.now(), texto, completa: false });
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        input.value = '';
        carregarTarefas();
    }
}

window.carregarTarefas = function() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const lista = document.getElementById('lista-tarefas');
    
    if (lista) {
        lista.innerHTML = tarefas.map(tarefa => `
            <li class="${tarefa.completa ? 'completa' : ''}">
                <span onclick="alternarTarefa(${tarefa.id})">${tarefa.texto}</span>
                <button onclick="removerTarefa(${tarefa.id})" class="btn-remover">X</button>
            </li>
        `).join('');
    }
}

window.alternarTarefa = function(id) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.completa = !tarefa.completa;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    }
}

window.removerTarefa = function(id) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const tarefasFiltradas = tarefas.filter(t => t.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(tarefasFiltradas));
    carregarTarefas();
}

// Funções placeholder para os outros desafios
window.criarCalculadora = function() {
    alert('Desafio: Implemente uma calculadora científica completa!');
}

window.criarSeletorCores = function() {
    alert('Desafio: Implemente um seletor de cores avançado!');
}

window.criarEditorTexto = function() {
    alert('Desafio: Implemente um editor de texto simples!');
}

window.criarDashboard = function() {
    alert('Desafio: Implemente um mini dashboard com widgets!');
}

// Mensagem de boas-vindas
alert("Bem-vindos ao treino de HTML/CSS/JS! 🚀\n\nEdite este arquivo e veja as mudanças em tempo real!"); 