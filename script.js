document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializa o AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
    });

    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const colorSwitcherBtn = document.getElementById('color-switcher-btn');
    const colorOptions = document.getElementById('color-options');
    const colorDots = document.querySelectorAll('.color-dot');

    // ------------------------------------------------
    // 1. Alternância de Tema Claro/Escuro
    // ------------------------------------------------
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        
        // Inicialização do Tema
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Padrão 'dark'
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        // Listener do Tema
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ------------------------------------------------
    // 2. Troca de Cor de Destaque
    // ------------------------------------------------
    if (colorSwitcherBtn && colorOptions && colorDots.length > 0) {
        
        // Inicialização da Cor
        const savedColor = localStorage.getItem('color-theme') || 'theme-mint';
        body.classList.add(savedColor);
        colorDots.forEach(dot => {
            if (dot.dataset.theme === savedColor) {
                dot.classList.add('active');
            }
        });
        
        // Listener para o botão de paleta
        colorSwitcherBtn.addEventListener('click', () => {
            colorOptions.classList.toggle('active');
        });
        
        // Listener para os pontos de cor
        colorDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const newColor = dot.dataset.theme;
                
                // Remove as classes de cor existentes
                body.classList.remove('theme-blue', 'theme-pink', 'theme-mint');
                // Adiciona a nova classe de cor
                body.classList.add(newColor);
                localStorage.setItem('color-theme', newColor);
                
                // Atualiza o estado "active"
                colorDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                colorOptions.classList.remove('active'); // Fecha após a seleção
            });
        });
        
        // Fecha o seletor de cores ao clicar fora
        document.addEventListener('click', (e) => {
            if (!colorSwitcherBtn.contains(e.target) && !colorOptions.contains(e.target)) {
                colorOptions.classList.remove('active');
            }
        });
    }

    // ------------------------------------------------
    // 3. Fechar Navbar no Clique
    // ------------------------------------------------
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navLinks.length > 0 && navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Checa se o menu está aberto antes de tentar fechar
                if (navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
    
    // ------------------------------------------------
    // 4. Scroll To Top Button
    // ------------------------------------------------
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrollThreshold = 300; 

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // ------------------------------------------------
    // 5. Efeito de Digitação e Animação do Header
    // ------------------------------------------------
    const welcomeText = document.querySelector('.welcome-text');
    const nameText = document.querySelector('.name-text');
    const typingContainer = document.querySelector('.typing-container');
    const typingTextSpan = document.querySelector('.typing-text');
    const headerLine = document.querySelector('.header-line .animated-line');

    if (welcomeText && nameText && typingContainer && typingTextSpan && headerLine) {
        
        // Sequência de Animações
        setTimeout(() => { welcomeText.classList.add('visible'); }, 300); 
        setTimeout(() => { nameText.classList.add('visible'); }, 900); 
        setTimeout(() => { 
            typingContainer.classList.add('visible');
            startTypingEffect();
        }, 1500);

        // O efeito de linha é disparado pelo CSS com delay de 1.5s, sincronizado com o JS.

        function startTypingEffect() {
            const words = ["Desenvolvedor Front-End.", "Web Designer.", "UI/UX Enthusiast."];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const currentWord = words[wordIndex];
                if (isDeleting) {
                    // Deletando
                    typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    if (charIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                } else {
                    // Digitanto
                    typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                    if (charIndex === currentWord.length) {
                        isDeleting = true;
                        setTimeout(type, 2000); // Pausa antes de deletar
                        return;
                    }
                }
                const typingSpeed = isDeleting ? 50 : 150;
                setTimeout(type, typingSpeed);
            }
            type();
        }
    }
    
    // ------------------------------------------------
    // 6. Animação da Linha dos Títulos de Seção
    // ------------------------------------------------
    const sectionTitleLines = document.querySelectorAll('.section-title-line .animated-line');
    
    // Adiciona uma classe para disparar a animação (já definida no AOS/CSS)
    // O AOS já cuida da visibilidade, o CSS faz o resto.
});