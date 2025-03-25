document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada para las secciones
    const sections = document.querySelectorAll('section');
    
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
    const prevButton = document.querySelector('.carousel-button.prev');
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Configurar posición inicial de las diapositivas
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    // Función para mover el carrusel
    const moveToSlide = (currentSlide, targetSlide) => {
        const targetIndex = slides.findIndex(slide => slide === targetSlide);
        
        // Mover a la nueva posición
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        
        // Actualizar clases activas
        currentSlide.classList.remove('active');
        targetSlide.classList.add('active');
        
        currentIndex = targetIndex;
        
        // Actualizar visibilidad de botones
        updateButtonsVisibility();
    };

    // Función para actualizar visibilidad de botones
    const updateButtonsVisibility = () => {
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex === slides.length - 1 ? '0.5' : '1';
        prevButton.style.pointerEvents = currentIndex === 0 ? 'none' : 'all';
        nextButton.style.pointerEvents = currentIndex === slides.length - 1 ? 'none' : 'all';
    };

    // Event Listeners para los botones
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            const currentSlide = slides[currentIndex];
            const nextSlide = slides[currentIndex + 1];
            moveToSlide(currentSlide, nextSlide);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            const currentSlide = slides[currentIndex];
            const prevSlide = slides[currentIndex - 1];
            moveToSlide(currentSlide, prevSlide);
        }
    });

    // Configuración inicial de botones
    updateButtonsVisibility();

    // Soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < slides.length - 1) {
                // Deslizar a la derecha
                const currentSlide = slides[currentIndex];
                const nextSlide = slides[currentIndex + 1];
                moveToSlide(currentSlide, nextSlide);
            } else if (diff < 0 && currentIndex > 0) {
                // Deslizar a la izquierda
                const currentSlide = slides[currentIndex];
                const prevSlide = slides[currentIndex - 1];
                moveToSlide(currentSlide, prevSlide);
            }
        }
    };
}); 