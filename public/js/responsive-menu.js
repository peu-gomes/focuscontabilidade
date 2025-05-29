
// Script para menu responsivo
class ResponsiveMenu {
  constructor() {
    this.menuToggle = null;
    this.mobileMenu = null;
    this.init();
  }
  
  init() {
    // Aguarda o DOM estar carregado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }
  
  setup() {
    this.menuToggle = document.querySelector('[data-menu-toggle]');
    this.mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (this.menuToggle && this.mobileMenu) {
      this.bindEvents();
    }
  }
  
  bindEvents() {
    // Toggle do menu
    this.menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    
    // Fechar menu ao clicar em links
    const menuLinks = this.mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });
    
    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.closeMenu();
      }
    });
  }
  
  toggleMenu() {
    const isOpen = this.mobileMenu.classList.contains('menu-open');
    if (isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }
  
  openMenu() {
    this.mobileMenu.classList.add('menu-open');
    this.menuToggle.classList.add('menu-active');
    document.body.classList.add('menu-overflow-hidden');
  }
  
  closeMenu() {
    this.mobileMenu.classList.remove('menu-open');
    this.menuToggle.classList.remove('menu-active');
    document.body.classList.remove('menu-overflow-hidden');
  }
}

// Inicializa o menu responsivo
new ResponsiveMenu();
