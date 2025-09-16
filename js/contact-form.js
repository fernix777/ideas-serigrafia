document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner-border');

    // Configuración de formsubmit.co
    const formAction = form.getAttribute('action');
    
    // Validación del formulario
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Resetear estados previos
        form.classList.remove('was-validated');
        formStatus.classList.add('d-none');
        
        // Validar campos
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }
        
        // Mostrar spinner y deshabilitar botón
        btnText.textContent = 'Enviando...';
        spinner.classList.remove('d-none');
        submitBtn.disabled = true;
        
        try {
            // Crear formulario dinámico para el envío
            const formData = new FormData(form);
            
            // Enviar el formulario a formsubmit.co
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                // Si hay una página de agradecimiento configurada, redirigir
                const nextPage = form.querySelector('input[name="_next"]')?.value;
                if (nextPage) {
                    window.location.href = nextPage;
                } else {
                    showAlert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
                    form.reset();
                    form.classList.remove('was-validated');
                }
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contáctanos directamente por teléfono al 376 4695751.', 'danger');
        } finally {
            // Restaurar botón
            btnText.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Enviar Mensaje';
            spinner.classList.add('d-none');
            submitBtn.disabled = false;
            
            // Hacer scroll al mensaje de estado
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
    
    // Mostrar mensaje de estado
    function showAlert(message, type) {
        formStatus.textContent = message;
        formStatus.className = `alert alert-${type} mt-3`;
        formStatus.classList.remove('d-none');
    }
    
    // Validación en tiempo real para campos requeridos
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
            } else {
                this.classList.add('is-invalid');
            }
        });
    });
});
