/* ========================================

CONFIGURAÇÕES DO VOUCHER
======================================== */

// Identifica o QR Code pelo parâmetro da URL.
// Exemplo: ?id=QR001

const parametrosURL = new URLSearchParams(window.location.search);

const codigoQR = parametrosURL.get("id");

// Por enquanto, o desconto é fixo.
// Depois poderemos associar cada código a um desconto diferente.

const desconto = 30;

console.log("Código QR acessado:", codigoQR);
console.log("Desconto configurado:", desconto + "%");

/* ========================================
2. ESTRELAS DOURADAS
======================================== */

const containerEstrelas = document.querySelector(".estrelas-container");

const quantidadeEstrelas = 25;

function criarEstrela() {

// Cria o elemento da estrela.

const estrela = document.createElement("span");

estrela.classList.add("estrela");

estrela.textContent = "✦";


// Define uma posição horizontal aleatória.

const posicaoHorizontal = Math.random() * 100;

estrela.style.left = `${posicaoHorizontal}%`;


// Define tamanho, duração e atraso aleatórios

const tamanho = Math.random() * 14 + 8;

const duracao = Math.random() * 5 + 5;

const atraso = Math.random() * 8;

estrela.style.fontSize = `${tamanho}px`;

estrela.style.animationDuration = `${duracao}s`;

estrela.style.animationDelay = `${atraso}s`;

// Define uma pequena variação horizontal

const deslocamento = Math.random() * 120 - 60;

estrela.style.setProperty( "--deslocamento-horizontal", `${deslocamento}px` );

// Adiciona a estrela à tela. 

containerEstrelas.appendChild(estrela);

// Remove a estrela depois que sua animação termina.

estrela.addEventListener("animationend", () => {

    estrela.remove();

});

}

/* ========================================
3. INICIALIZAÇÃO DAS ESTRELAS
======================================== */

function iniciarEstrelas() {

for (let i = 0; i < quantidadeEstrelas; i++) {

    criarEstrela();

}

}

/* ========================================
4. CRIAÇÃO CONTÍNUA DE ESTRELAS
======================================== */

function manterEstrelasCaindo() {

criarEstrela();

const intervalo = Math.random() * 350 + 200;

setTimeout(manterEstrelasCaindo, intervalo);

}

/* ========================================
5. EXECUÇÃO
======================================== */

if (containerEstrelas) {

iniciarEstrelas();

manterEstrelasCaindo();

}