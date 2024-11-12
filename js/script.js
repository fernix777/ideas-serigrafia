// Funcionalidades para el formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    // Aquí puedes añadir la lógica para enviar el formulario por correo
    alert(`Gracias por contactarnos, ${nombre}!`);
  });
  
  // Integración de Google Maps
  function initMap() {
    const ubicacion = { // Funcionalidades para el formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Aquí puedes añadir la lógica para enviar el formulario por correo
  alert(`Gracias por contactarnos, ${nombre}!`);
});

// Integración de Google Maps
function initMap() {
  const ubicacion = { lat: -27.36884215782419, lng: -55.948506676222536  }; // Cambia esto a la ubicación de tu negocio
  const mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 8,
    center: ubicacion
  });
  const marcador = new google.maps.Marker({
    position: ubicacion,
    map: mapa
  });
}
