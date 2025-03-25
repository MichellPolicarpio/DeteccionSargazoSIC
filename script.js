document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const subtitle = document.querySelector('.subtitle');
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Ocultar subtítulo al hacer scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) {
            subtitle.style.opacity = '0';
        } else {
            subtitle.style.opacity = '1';
        }
        lastScrollTop = scrollTop;
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Navegación suave
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            // Solo para links internos
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const headerOffset = 80; // Altura de la barra de navegación
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Resaltado de sección activa en el scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Llamar inicialmente

    // Animación de entrada para las secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Efecto de parallax suave en el header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animación del gradiente del título
    const title = document.querySelector('h1');
    let degree = 45;
    
    setInterval(() => {
        degree = (degree + 1) % 360;
        title.style.background = `linear-gradient(${degree}deg, var(--samsung-white), #a0a0a0)`;
        title.style.webkitBackgroundClip = 'text';
        title.style.webkitTextFillColor = 'transparent';
    }, 50);

    // Configuración del carrusel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Ocultar el botón previo ya que solo nos moveremos hacia la derecha
    const prevButton = document.querySelector('.carousel-button.prev');
    prevButton.style.display = 'none';
    
    // Clonar elementos para el carrusel infinito
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });
    
    // Configuración inicial
    let currentIndex = 0;
    const slideWidth = 200; // Ancho base del slide
    const gap = 32; // 2rem de gap
    let isTransitioning = false;
    
    // Función para mover el carrusel
    function moveCarousel() {
        if (isTransitioning) return;
        
        currentIndex++;
        const position = -(slideWidth + gap) * currentIndex;
        
        // Transición suave
        isTransitioning = true;
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${position}px)`;
        
        // Cuando la transición termine, verificar si necesitamos resetear
        setTimeout(() => {
            if (currentIndex >= slides.length) {
                // Quitar la transición para el reset instantáneo
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
                
                // Forzar un reflow para asegurar que el reset sea instantáneo
                track.offsetHeight;
            }
            isTransitioning = false;
        }, 500); // Este tiempo debe coincidir con la duración de la transición
    }

    // Event listener para el botón next
    nextButton.addEventListener('click', () => {
        if (!isTransitioning) {
            moveCarousel();
        }
    });

    // Autoplay del carrusel
    const autoplayInterval = 3000; // 3 segundos entre cada movimiento
    let autoplayTimer = setInterval(moveCarousel, autoplayInterval);

    // Pausar el autoplay cuando el usuario interactúa con el carrusel
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayTimer);
    });

    // Reanudar el autoplay cuando el usuario deja de interactuar
    track.addEventListener('mouseleave', () => {
        autoplayTimer = setInterval(moveCarousel, autoplayInterval);
    });

    // Soporte táctil simplificado
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        if (isTransitioning) return;
        touchStartX = e.touches[0].clientX;
        clearInterval(autoplayTimer);
    });

    track.addEventListener('touchend', (e) => {
        if (isTransitioning) return;
        touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchStartX - touchEndX;
        
        if (swipeDistance > 50) { // Si el swipe es significativo
            moveCarousel();
        }
        
        // Reanudar autoplay
        autoplayTimer = setInterval(moveCarousel, autoplayInterval);
    });
}); 