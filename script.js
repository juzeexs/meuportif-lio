document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init({
        duration: 800,
        once: true,
    });

    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const colorSwitcherBtn = document.getElementById('color-switcher-btn');
    const colorOptions = document.getElementById('color-options');
    const colorDots = document.querySelectorAll('.color-dot');

    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

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

    if (colorSwitcherBtn && colorOptions && colorDots.length > 0) {
        
        const savedColor = localStorage.getItem('color-theme') || 'theme-mint';
        body.classList.add(savedColor);
        colorDots.forEach(dot => {
            if (dot.dataset.theme === savedColor) {
                dot.classList.add('active');
            }
        });
        
        colorSwitcherBtn.addEventListener('click', () => {
            colorOptions.classList.toggle('active');
        });
        
        colorDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const newColor = dot.dataset.theme;
                
                body.classList.remove('theme-blue', 'theme-pink', 'theme-mint');
                body.classList.add(newColor);
                localStorage.setItem('color-theme', newColor);
                
                colorDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                colorOptions.classList.remove('active');
            });
        });
        
        document.addEventListener('click', (e) => {
            if (!colorSwitcherBtn.contains(e.target) && !colorOptions.contains(e.target)) {
                colorOptions.classList.remove('active');
            }
        });
    }

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navLinks.length > 0 && navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
    
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

    const welcomeText = document.querySelector('.welcome-text');
    const nameText = document.querySelector('.name-text');
    const typingContainer = document.querySelector('.typing-container');
    const typingTextSpan = document.querySelector('.typing-text');
    const headerLine = document.querySelector('.header-line .animated-line');

    if (welcomeText && nameText && typingContainer && typingTextSpan && headerLine) {
        
        setTimeout(() => { welcomeText.classList.add('visible'); }, 300); 
        setTimeout(() => { nameText.classList.add('visible'); }, 900); 
        setTimeout(() => { 
            typingContainer.classList.add('visible');
            startTypingEffect();
        }, 1500);

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
                        setTimeout(type, 2000);
                        return;
                    }
                }
                const typingSpeed = isDeleting ? 50 : 150;
                setTimeout(type, typingSpeed);
            }
            type();
        }
    }
    
    const sectionTitleLines = document.querySelectorAll('.section-title-line .animated-line');
    
});