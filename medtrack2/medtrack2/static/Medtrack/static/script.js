// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // Fade out flash messages
    const flashes = document.querySelectorAll('.flash');
    flashes.forEach(msg => {
        setTimeout(() => {
            msg.style.transition = 'opacity 0.5s ease-out';
            msg.style.opacity = '0';
        }, 3000);  // Disappear after 3 seconds
    });

    // Toggle password visibility
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const input = document.querySelector(`#${icon.dataset.toggle}`);
            if (input.type === 'password') {
                input.type = 'text';
                icon.textContent = '🙈';
            } else {
                input.type = 'password';
                icon.textContent = '👁️';
            }
        });
    });

    // Simple client-side form validation
    const forms = document.querySelectorAll('form.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                alert("Please fill out all required fields.");
            }
        });
    });

    // Color picker preview (for appointment booking)
    const colorInput = document.getElementById('color');
    const previewCircle = document.getElementById('colorPreview');
    if (colorInput && previewCircle) {
        colorInput.addEventListener('input', () => {
            previewCircle.style.backgroundColor = colorInput.value;
        });
    }

    // Optional: Mobile nav toggle
    const menuBtn = document.querySelector('#menuToggle');
    const navMenu = document.querySelector('#mainNav');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

});
