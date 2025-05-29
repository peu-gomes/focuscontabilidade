
// Script para animação de contagem
function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-counter'));
    const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
    const suffix = counter.getAttribute('data-suffix') || '';
    
    let current = 0;
    const increment = target / (duration / 16); // 16ms para 60fps
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };
    
    // Inicia a animação quando o elemento entra na viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(counter);
  });
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', animateCounters);
