// Funcionalidades para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Aquí puedes añadir la lógica para enviar el formulario por correo
            console.log('Formulario enviado:', { nombre, email, mensaje });
            alert(`Gracias por contactarnos, ${nombre}!`);
        });
    }
});

// Integración de Google Maps
function initMap() {
    // Coordenadas de Ideas Serigrafía en Posadas, Misiones
    const ubicacion = { 
        lat: -27.36884215782419, 
        lng: -55.948506676222536
    };
    
    const mapaElement = document.getElementById('mapa');
    
    if (mapaElement) {
        const mapa = new google.maps.Map(mapaElement, {
            zoom: 15,
            center: ubicacion,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{ visibility: 'off' }]
                }
            ]
        });
        
        new google.maps.Marker({
            position: ubicacion,
            map: mapa,
            title: 'Ideas Serigrafía',
            animation: google.maps.Animation.DROP
        });
    }
}

// Cargar el mapa cuando la API esté lista
if (typeof google !== 'undefined') {
    initMap();
}
