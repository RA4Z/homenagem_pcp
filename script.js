/* =========================================================================
    1. LISTA DAS HOMENAGEADAS (ADICIONE QUANTAS QUISER)
    ========================================================================= */
const mulheresHomenageadas = [
    {
        nome: "Sra. NomeDaPessoa",
        foto: "images/image.png",
        descricao: "Detentora de uma sabedoria que rivaliza com os eruditos reais. Sua capacidade de amar e liderar a transforma na verdadeira rainha de seu lar e profissão."
    },
    {
        nome: "Srta. NomeDaPessoa",
        foto: "images/image1.png",
        descricao: "Com um sorriso que poderia encerrar guerras, ela possui uma alma de artista. Sua ousadia quebra as regras da sociedade com a mais pura elegância."
    },
    {
        nome: "Lady NomeDaPessoa",
        foto: "images/image2.png",
        descricao: "Uma força da natureza. Diante das adversidades, ela não se curva; ela floresce. Um exemplo magnífico de resiliência e poder feminino."
    },
    {
        nome: "Duquesa NomeDaPessoa",
        foto: "images/image3.png",
        descricao: "A mais gentil das almas, cujo coração de ouro caridoso ilumina a vida de todos que têm o privilégio de sua divina companhia."
    }
];

/* =========================================================================
    2. REMOVER CORTINA DE INTRODUÇÃO
    ========================================================================= */
window.onload = () => {
    setTimeout(() => {
        const curtain = document.getElementById('intro-curtain');
        curtain.style.opacity = '0';
        setTimeout(() => curtain.style.display = 'none', 1500);
    }, 2500); // Fica na tela por 2.5 segundos
};

/* =========================================================================
    3. RENDERIZAÇÃO DOS CARDS COM DESTAQUE INDIVIDUAL
    ========================================================================= */
const galleryContainer = document.getElementById('gallery-container');

mulheresHomenageadas.forEach((mulher, index) => {
    // Cria o container do card
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-container';
    
    // Constrói o HTML interno focando na separação de Imagem e Texto
    cardWrapper.innerHTML = `
        <div class="card">
            <div class="imagem-destaque">
                <div class="coroa">👑</div>
                <div class="moldura-magica">
                    <img src="${mulher.foto}" alt="${mulher.nome}">
                </div>
            </div>
            <div class="texto-homenagem">
                <h3>${mulher.nome}</h3>
                <p>"${mulher.descricao}"</p>
            </div>
        </div>
    `;
    galleryContainer.appendChild(cardWrapper);

    // Adiciona uma divisória real bonita após cada card (exceto o último)
    if (index < mulheresHomenageadas.length - 1) {
        const divider = document.createElement('div');
        divider.className = 'royal-divider';
        divider.innerHTML = '✧ ✦ ✧ ⚜ ✧ ✦ ✧';
        galleryContainer.appendChild(divider);
    }
});

/* =========================================================================
    4. ANIMAÇÃO DE ROLAGEM (OBSERVER)
    ========================================================================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

// Observa os cards
document.querySelectorAll('.card-container').forEach(card => {
    observer.observe(card);
});
// Observa também as divisórias para entrarem com efeito
document.querySelectorAll('.royal-divider').forEach(divider => {
    divider.style.opacity = '0';
    divider.style.transition = 'opacity 2s ease, transform 2s ease';
    divider.style.transform = 'scale(0.8)';
    
    const divObserver = new IntersectionObserver((ents) => {
        ents.forEach(e => {
            if(e.isIntersecting) {
                e.target.style.opacity = '0.8';
                e.target.style.transform = 'scale(1)';
            }
        });
    });
    divObserver.observe(divider);
});

/* =========================================================================
    5. SISTEMA DE PARTÍCULAS EXTRAVAGANTES (PÉTALAS E OURO)
    ========================================================================= */
const particlesContainer = document.getElementById('particles-container');

function createParticle() {
    const isSparkle = Math.random() > 0.6; // 40% chance de ser brilho de ouro
    const particle = document.createElement('div');
    
    if (isSparkle) {
        particle.classList.add('sparkle');
        const size = Math.random() * 4 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        const duration = Math.random() * 5 + 4;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    } else {
        particle.classList.add('petal');
        const size = Math.random() * 18 + 12;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        
        // Cores variadas para as pétalas
        const colors = ['rgba(255,182,193,0.7)', 'rgba(185,160,230,0.7)', 'rgba(255,255,255,0.7)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const duration = Math.random() * 7 + 5;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }
}

// Criar partículas continuamente
setInterval(createParticle, 200);