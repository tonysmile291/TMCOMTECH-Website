'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Mark the active page in the shared navigation.
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#site-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
});
