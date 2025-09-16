document.addEventListener('DOMContentLoaded', () => {
    const filtrosBotones = document.querySelectorAll('.trabajos-filtros .btn');
    const trabajosItems = document.querySelectorAll('.trabajo-item');

    filtrosBotones.forEach(boton => {
        boton.addEventListener('click', () => {
            // Quitar clase 'active' de todos los botones
            filtrosBotones.forEach(b => b.classList.remove('active'));
            
            // Añadir 'active' al botón clickeado
            boton.classList.add('active');
            
            // Obtener el filtro
            const filtro = boton.getAttribute('data-filter');
            
            // Filtrar trabajos
            trabajosItems.forEach(item => {
                if (filtro === 'todos' || item.getAttribute('data-category') === filtro) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
