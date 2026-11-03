'use strict';

// Accessible, responsive navigation with predictable keyboard controls.
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const mobileNav = window.matchMedia('(max-width: 980px)');

if (menuButton && siteNav) {
  const setMenuOpen = (open) => {
    siteNav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = open ? '✕' : '☰';
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(!siteNav.classList.contains('open'));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('open')) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (siteNav.classList.contains('open') &&
        !siteNav.contains(event.target) &&
        !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  mobileNav.addEventListener('change', () => setMenuOpen(false));
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Mark the active page in the primary and footer navigation.
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#site-nav a, .footer-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.setAttribute('aria-current', 'page');
  }
});
