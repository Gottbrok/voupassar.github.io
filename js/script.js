document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.btn-login');
    
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Futuro: Redirecionar para página de login
        window.location.href = 'https://app.voupassar.com/login';
    });

    // Animações simples
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            feature.style.transition = 'all 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
});
