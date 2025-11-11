// script.geral

document.addEventListener('DOMContentLoaded', () => {
  
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-navigation');
  menuToggle && menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });

  
  document.addEventListener('click', (e) => {
    if (!nav) return;
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('active');
      menuToggle && menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  
  const newsletterForm = document.getElementById('newsletter-form');
  const nemail = document.getElementById('nemail');
  const nmsg = document.getElementById('newsletter-msg');

  if (newsletterForm) {
    
    const savedEmail = localStorage.getItem('newsletterEmail');
    if (savedEmail) {
      nemail.value = savedEmail;
      nmsg.textContent = 'Seu email já está salvo. Obrigado!';
    }

    newsletterForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      nmsg.textContent = '';
      const emailVal = nemail.value.trim();

      if (!emailVal) {
        nmsg.textContent = 'Por favor, insira um email.';
        nemail.focus();
        return;
      }
    
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(emailVal)) {
        nmsg.textContent = 'Insira um email válido.';
        nemail.focus();
        return;
      }

    
      localStorage.setItem('newsletterEmail', emailVal);
      nmsg.textContent = 'Obrigado! Email salvo com sucesso.';
      nmsg.style.color = ''; // mantém cor do CSS
    });
  }
});
