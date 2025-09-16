// Ideas Serigrafía - Funcionalidades Principales

document.addEventListener('DOMContentLoaded', () => {
    // Modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle?.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });

    // Recuperar preferencia de modo oscuro
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Validación de formulario
    const contactForm = document.querySelector('form[name="contact"]');
    contactForm?.addEventListener('submit', (e) => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let valid = true;

        // Validaciones personalizadas
        if (name.value.trim().length < 2) {
            name.setCustomValidity('Por favor, ingrese un nombre válido');
            valid = false;
        } else {
            name.setCustomValidity('');
        }

        if (!/\S+@\S+\.\S+/.test(email.value)) {
            email.setCustomValidity('Por favor, ingrese un email válido');
            valid = false;
        } else {
            email.setCustomValidity('');
        }

        if (message.value.trim().length < 10) {
            message.setCustomValidity('El mensaje debe tener al menos 10 caracteres');
            valid = false;
        } else {
            message.setCustomValidity('');
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    // WhatsApp Integration
    const whatsappButton = document.getElementById('whatsapp-button');
    whatsappButton?.addEventListener('click', () => {
        const phoneNumber = '+5493764123456'; // Reemplazar con número real
        const message = encodeURIComponent('Hola, estoy interesado en sus servicios de serigrafía.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });

    // Lazy loading de imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Animaciones de scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
