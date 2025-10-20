document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init({
        duration: 800,
        once: true,
    });

    const body = document.body;

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        // Inicialização
        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        // Listener
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

    if (welcomeText && nameText && typingContainer && typingTextSpan) {
        setTimeout(() => {
            welcomeText.classList.add('visible');
        }, 300); 

        setTimeout(() => {
            nameText.classList.add('visible');
        }, 900); 

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
                    typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    if (charIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                } else {
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
});