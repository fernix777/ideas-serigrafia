// Video player initialization
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    // Función para cambiar el video principal
    function changeMainVideo(videoSrc, videoTitleText) {
        // Cambiar la fuente del video
        mainVideo.src = videoSrc;
        
        // Actualizar el título
        videoTitle.textContent = videoTitleText;
        
        // Cargar y reproducir el nuevo video
        mainVideo.load();
        mainVideo.play().catch(error => {
            console.error('Error al reproducir el video:', error);
        });
        
        // Actualizar la miniatura activa
        updateActiveThumbnail(videoSrc);
    }
    
    // Función para actualizar la miniatura activa
    function updateActiveThumbnail(activeVideoSrc) {
        videoThumbnails.forEach(thumbnail => {
            if (thumbnail.getAttribute('data-video') === activeVideoSrc) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }
    
    // Agregar evento de clic a las miniaturas
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const videoTitleText = this.getAttribute('data-title');
            changeMainVideo(videoSrc, videoTitleText);
        });
    });
    
    // Inicializar el primer video como activo
    if (videoThumbnails.length > 0) {
        videoThumbnails[0].classList.add('active');
    }
    
    // Manejar errores de carga de video
    mainVideo.addEventListener('error', function() {
        console.error('Error al cargar el video:', mainVideo.error);
        alert('Lo sentimos, hubo un error al cargar el video. Por favor, intente nuevamente más tarde.');
    });
});
