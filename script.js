/* =========================================================================
    1. LISTA DAS HOMENAGEADAS (ADICIONE QUANTAS QUISER)
    ========================================================================= */
const mulheresHomenageadas = [
    {
        nome: "Lady Raquel, A Aprendiz Exímia",
        foto: "images/Raquel.jpeg",
        descricao: "Iniciou sua jornada em nova área e já demonstra que aprender com excelência é sua assinatura. O desconhecido não a intimida — apenas a impulsiona."
    },
    {
        nome: "Lady Amanda, A Senhora da Liderança",
        foto: "images/Amanda.png",
        descricao: "Recém-nomeada gerente, prova diariamente que o poder feminino não pede licença — ele se impõe com competência e segurança."
    },
    {
        nome: "Lady Fernanda, A Gentileza Personificada",
        foto: "images/Fernanda.png",
        descricao: "Sempre cordial, sempre acolhedora. Há quem diga que sua presença suaviza até os dias mais turbulentos."
    },
    {
        nome: "Lady Bruna, A Rainha das Entrelinhas",
        foto: "images/Bruna.png",
        descricao: "Piadas afiadas, olhar atento e comentários no momento exato. Nada escapa ao seu radar bem-humorado."
    },
    {
        nome: "Lady Cintia, A Fênix de Brilho Renovado",
        foto: "images/Cintia.png",
        descricao: "Mostrou que momentos difíceis são apenas fases — e que seu brilho jamais esteve ausente, apenas aguardava o momento certo para reluzir."
    },
    {
        nome: "Lady Francine, A Incansável",
        foto: "images/Francine.png",
        descricao: "Dedicada, focada e constante. Fiel às suas convicções, pode ser exigente, mas ninguém duvida de sua persistência inabalável."
    },
    {
        nome: "Lady Graziele, A Ousada da Mudança",
        foto: "images/Graziele.png",
        descricao: "Deixou para trás anos no almoxarifado para abraçar novos desafios no PCP. Coragem não lhe falta — visão também não."
    },
    {
        nome: "Lady Daniele, A Determinação Carismática",
        foto: "images/Daniele.jpeg",
        descricao: "Determinada como poucas, não mede esforços para alcançar o que deseja. E seu carisma natural faz com que até as tarefas mais árduas pareçam festas de salão."
    },
    {
        nome: "Lady Isadora, A Verdadeira Lady",
        foto: "images/Isadora.png",
        descricao: "Elegância natural, postura impecável e serenidade admirável. Classe não se aprende — carrega-se com cada gesto."
    },
    {
        nome: "Lady Joenice, A Determinada Bem-Humorada",
        foto: "images/Joenice.png",
        descricao: "Quando decide algo, realiza. E ainda encontra tempo para espalhar risadas pelo caminho, porque a seriedade só combina com charme."
    },
    {
        nome: "Lady Karoline, A Intensidade Encantadora",
        foto: "images/Karoline.png",
        descricao: "Ansiedade e alegria coexistem em sua personalidade vibrante. Vive tudo com emoção genuína — e contagiante."
    },
    {
        nome: "Lady Marineusa, O Exemplo Inspirador",
        foto: "images/Marineusa.png",
        descricao: "Batalhadora incansável, conquista o que deseja com graça e firmeza. Sua trajetória fala por si."
    },
    {
        nome: "Lady Nathalia, A Persistente Espirituosa",
        foto: "images/Nathalia.png",
        descricao: "Determinação e humor caminham juntos em sua jornada. Foco sem perder a leveza — combinação rara e irresistível."
    },
    {
        nome: "Lady Thálita, A Nova Promessa",
        foto: "images/Thálita.png",
        descricao: "Chegou recentemente à seção para enfrentar novos desafios. E já demonstra que sua história aqui será digna de memoráveis crônicas."
    },
    {
        nome: "Lady Hellen, A Força Silenciosa",
        foto: "images/Hellen.png",
        descricao: "Quietinha, observadora e constante. Porque as maiores fortalezas nem sempre fazem alarde."
    },
    {
        nome: "Lady Valeria, Amor e Inspiração",
        foto: "images/Valeria.png",
        descricao: "Cria seus dois filhos com amor e determinação, enquanto supera desafios diários. Sua força e dedicação são inspiração para todos que a conhecem — uma verdadeira heroína do cotidiano."
    },
    {
        nome: "Lady Eliana, A Resiliência Estratégica",
        foto: "images/Eliana.png",
        descricao: "Transforma cada obstáculo em oportunidade e garante que nada fique incompleto. Perseverança e elegância combinam perfeitamente em seu modo de conduzir desafios."
    },
    {
        nome: "Lady Dandara, A Nova Força da Temporada",
        foto: "images/Dandara.png",
        descricao: "Chegou recentemente, trazendo disposição, energia e vontade de crescer. Se o início já demonstra seu brilho, esta temporada promete ser apenas o primeiro capítulo de uma trajetória marcante."
    },
    {
        nome: "Lady Samara, A Bem-Humorada Determinada",
        foto: "images/Samara.png",
        descricao: "Responsável, determinada e com um senso de humor que ilumina o ambiente, Lady Samara enfrenta desafios com leveza e eficiência, provando que foco e diversão podem caminhar lado a lado."
    },
    {
        nome: "Lady Solange, A Confidente Diligente",
        foto: "images/Solange.png",
        descricao: "Comunicativa e dedicada, assume responsabilidades com naturalidade. Sua empatia não é detalhe — é marca registrada."
    },
    {
        nome: "Lady Thaiane, A Determinada Autêntica",
        foto: "images/Thaiane.png",
        descricao: "Confiante e organizada, traça metas com precisão. Não segue padrões — estabelece os seus."
    },
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