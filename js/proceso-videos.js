document.addEventListener('DOMContentLoaded', () => {
    const procesosVideos = document.querySelectorAll('.proceso-video');
    const videoModal = new bootstrap.Modal(document.getElementById('procesoVideoModal'));
    const videoPlayer = document.getElementById('procesoVideoPlayer');

    procesosVideos.forEach(videoContainer => {
        videoContainer.addEventListener('click', () => {
            const videoSrc = videoContainer.getAttribute('data-video');
            
            // Establecer source del video
            videoPlayer.querySelector('source').src = videoSrc;
            videoPlayer.load(); // Recargar el video
            
            // Mostrar modal
            videoModal.show();
        });
    });
});
