/**
 * Jednoduchý skript pro vylepšení UX na error stránce
 */
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = 10;

    if (countdownElement) {
        const timer = setInterval(() => {
            timeLeft--;
            countdownElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                window.location.href = '/'; // Návrat na domovskou stránku
            }
        }, 1000);
    }
});