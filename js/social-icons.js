document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon, .social-icon2');
    
    socialIcons.forEach(icon => {
        // Crear tooltip
        const tooltip = document.createElement('div');
        tooltip.classList.add('social-tooltip');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        
        // Texto del tooltip basado en el alt del icono
        tooltip.textContent = icon.getAttribute('alt').replace('logo-', '').toUpperCase();
        
        // Posicionar tooltip
        icon.parentNode.appendChild(tooltip);
        
        // Añadir efecto de hover
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
            
            // Mostrar tooltip
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
            
            // Ocultar tooltip
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
        
        // Efecto de click con vibración
        icon.addEventListener('click', (e) => {
            // Pequeña animación de notificación
            icon.classList.add('social-icon-notify');
            
            // Vibración suave (si está soportado)
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
            
            // Remover clase de notificación
            setTimeout(() => {
                icon.classList.remove('social-icon-notify');
            }, 300);
            
            // Tracking de interacción (ejemplo básico)
            console.log(`Icono social clickeado: ${icon.getAttribute('alt')}`);
        });
    });
});
