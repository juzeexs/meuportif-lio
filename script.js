const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

const currentTheme = localStorage.getItem('theme') || 'dark';

html.setAttribute('data-theme', currentTheme);
if (currentTheme === 'light') {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
} else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', (event) => {
    if (!document.startViewTransition) {
        updateTheme(); 
        return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
        updateTheme();
    });

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        
        document.documentElement.animate(
            {
                clipPath: clipPath,
            },
            {
                duration: 500,
                easing: 'ease-in',
                pseudoElement: '::view-transition-new(root)', 
            }
        );
    });
});

function updateTheme() {
    const isLight = html.getAttribute('data-theme') === 'light';
    const theme = isLight ? 'dark' : 'light';
    
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const menuIcon = mobileToggle.querySelector('i');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    });
});

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        alert(`Obrigado, ${name}! Sua mensagem foi recebida. Entrarei em contato em breve através do email: ${email}`);
        contactForm.reset();
    });
}

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('habilidades');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});